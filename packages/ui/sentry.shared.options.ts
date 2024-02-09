import type * as Sentry from "@sentry/nextjs";

const environment = process.env.VERCEL_ENV ?? "development";

export const sentrySharedConfigOptions: Parameters<typeof Sentry.init>[0] = {
  debug: false,
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment,
  tracesSampleRate: 1,
};
