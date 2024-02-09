import * as Sentry from "@sentry/nextjs";
import { sentrySharedConfigOptions } from "./sentry.shared.options";

Sentry.init({
  ...sentrySharedConfigOptions,
  integrations: [
    new Sentry.Replay({
      blockAllMedia: false,
      maskAllInputs: false,
      maskAllText: false,
    }),
  ],
  replaysOnErrorSampleRate: 1,
  replaysSessionSampleRate: 0.1,
});
