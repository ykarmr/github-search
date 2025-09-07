import pino from "pino";

import { loggerOptions } from "./logger-options";

export const logger = pino(loggerOptions);
