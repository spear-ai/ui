/* eslint-disable import/no-mutable-exports */

import { withSentryConfig } from "@sentry/nextjs";
import relayConfig from "./relay.config.json" assert { type: "json" };

/** @type {import('next').NextConfig} */
let nextConfig = {
  compiler: {
    relay: relayConfig,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: true,
    serverComponentsExternalPackages: [
      "grafast",
      "grafserv",
      "graphile-export",
      "graphql",
      "postgraphile",
      "ruru",
    ],
  },
  images: {
    domains: ["127.0.0.1", "localhost"],
  },
  output: "standalone",
  poweredByHeader: false,
  redirects() {
    return [
      {
        destination: "/display",
        permanent: false,
        source: "/",
      },
      {
        destination: `/api/graphiql?api=postgraphile`,
        missing: [{ key: "api", type: "query" }],
        permanent: false,
        source: `/api/graphiql`,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

nextConfig = withSentryConfig(
  nextConfig,
  {
    org: "spear-ai",
    project: "forerunner-app",
    silent: true,
  },
  {
    disableLogger: true,
    hideSourceMaps: false,
    tunnelRoute: "/sentry",
    widenClientFileUpload: true,
  },
);

export default nextConfig;
