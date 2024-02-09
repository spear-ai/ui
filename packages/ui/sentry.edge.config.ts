import * as Sentry from "@sentry/nextjs";
import { sentrySharedConfigOptions } from "./sentry.shared.options";

Sentry.init(sentrySharedConfigOptions);
