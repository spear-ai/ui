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

export const networkFetch = async (
  request: RequestParameters,
  variables: Variables,
  apiUrl: string,
): Promise<GraphQLResponse> => {
  const response = await fetch(apiUrl, {
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return (await response.json()) as unknown as GraphQLResponse;
};

const createFetchResponse = (options: {
  apiUrl: string;
  cacheSize: number;
  cacheTtl: number;
  recentFetchLatencyList: number[];
}) => {
  const { apiUrl, cacheSize, cacheTtl, recentFetchLatencyList } = options;

  const responseCache: QueryResponseCache = new QueryResponseCache({
    size: cacheSize,
    ttl: cacheTtl,
  });

  return async (parameters: RequestParameters, variables: Variables, cacheConfig: CacheConfig) => {
    const isQuery = parameters.operationKind === "query";
    const cacheKey = parameters.id ?? parameters.cacheID;
    const forceFetch = cacheConfig.force;

    if (isQuery && !forceFetch) {
      const fromCache = responseCache.get(cacheKey, variables);

      if (fromCache != null) {
        return fromCache;
      }
    }

    const fetchStart = performance.now();
    const fetchResult = await networkFetch(parameters, variables, apiUrl);
    const fetchEnd = performance.now();
    recentFetchLatencyList.push(fetchEnd - fetchStart);
    if (recentFetchLatencyList.length > 100) {
      recentFetchLatencyList.shift();
    }

    return fetchResult;
  };
};

export type RelayEnvironment = Environment & {
  options: {
    recentFetchLatencyList: number[];
  };
};

export const createEnvironment = (options: {
  apiUrl: string;
  cacheSize?: number | undefined;
  cacheTtl?: number | undefined;
}): RelayEnvironment => {
  const { apiUrl, cacheSize = 100, cacheTtl = 5000 } = options;
  const recentFetchLatencyList: number[] = [];

  return new Environment({
    isServer: false,
    network: Network.create(createFetchResponse({ apiUrl, cacheSize, cacheTtl, recentFetchLatencyList })),
    options: { recentFetchLatencyList },
    store: new Store(RecordSource.create()),
  }) as RelayEnvironment;
};
