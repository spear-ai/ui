import abslog, { AbstractLoggerOptions, ValidLogger } from "abslog";
import ky, { Hooks, Options as KyOptions } from "ky";
import {
  CacheConfig,
  Environment,
  GraphQLResponse,
  Network,
  QueryResponseCache,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";
import { v4 as uuidv4 } from "uuid";

type PartialKyOptions = Pick<KyOptions, "hooks" | "retry" | "timeout">;

const makeFetchResponse = (
  options: PartialKyOptions & {
    apiUrl: string;
    cacheSize: number;
    cacheTtl: number;
    latencyRetentionCount: number;
    logger: ValidLogger;
    recentFetchLatencyList: number[];
  },
) => {
  const {
    apiUrl,
    cacheSize,
    cacheTtl,
    hooks,
    latencyRetentionCount,
    logger,
    recentFetchLatencyList,
    ...kyOptions
  } = options;

  const requestId = uuidv4();

  const mergedHooks: Hooks = {
    ...hooks,
    afterResponse: [
      ...(hooks?.afterResponse ?? []),
      (request, requestOptions, response) => {
        logger.debug({ request, requestId, requestOptions, response }, "afterResponse");
      },
    ],
    beforeRequest: [
      ...(hooks?.beforeRequest ?? []),
      (request, requestOptions) => {
        logger.debug({ request, requestId, requestOptions }, "beforeRequest");
      },
    ],
    beforeRetry: [
      ...(hooks?.beforeRetry ?? []),
      (retryOptions) => {
        logger.debug({ requestId, retryOptions }, "beforeRetry");
      },
    ],
  };

  const responseCache: QueryResponseCache = new QueryResponseCache({
    size: cacheSize,
    ttl: cacheTtl,
  });

  return async (parameters: RequestParameters, variables: Variables, cacheConfig: CacheConfig) => {
    const isQuery = parameters.operationKind === "query";
    const cacheKey = parameters.id ?? parameters.cacheID;
    const shouldUseCache = !(cacheConfig.force ?? false);

    // Don’t cache GraphQL mutations or subscriptions
    if (isQuery && shouldUseCache) {
      const cacheResponse = responseCache.get(cacheKey, variables);

      if (cacheResponse != null) {
        return cacheResponse;
      }
    }

    const fetchStart = performance.now();
    const fetchResponse = await ky.post<GraphQLResponse>(apiUrl, {
      ...kyOptions,
      hooks: mergedHooks,
      json: {
        query: parameters.text,
        variables,
      },
    });
    const response = await fetchResponse.json();
    const fetchEnd = performance.now();

    recentFetchLatencyList.push(fetchEnd - fetchStart);

    if (recentFetchLatencyList.length > latencyRetentionCount) {
      recentFetchLatencyList.shift();
    }

    return response;
  };
};

export type RelayEnvironment = Environment & {
  options: {
    /** The most recent fetch latency metrics. */
    recentFetchLatencyList: number[];
  };
};

export const createEnvironment = (
  options: PartialKyOptions & {
    /** The GraphQL API endpoint URL. */
    apiUrl: string;
    /** The maximum number of entities to keep inside Relay's cache. */
    cacheSize?: number | undefined;
    /** The maximum time to keep entities inside Relay's cache. */
    cacheTtl?: number | undefined;
    /** The maximum number of latency metrics to retain. */
    latencyRetentionCount?: number | undefined;
    /** The logger to use when handling requests. */
    logger?: AbstractLoggerOptions | undefined;
  },
): RelayEnvironment => {
  const {
    cacheSize = 100,
    cacheTtl = 5000,
    latencyRetentionCount = 100,
    logger: customLogger,
    ...rest
  } = options;
  const recentFetchLatencyList: number[] = [];
  const logger = abslog(customLogger);

  return new Environment({
    isServer: false,
    network: Network.create(
      makeFetchResponse({
        cacheSize,
        cacheTtl,
        latencyRetentionCount,
        logger,
        recentFetchLatencyList,
        ...rest,
      }),
    ),
    options: { recentFetchLatencyList },
    store: new Store(RecordSource.create()),
  }) as RelayEnvironment;
};
