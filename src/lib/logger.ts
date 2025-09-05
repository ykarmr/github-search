import pino from "pino";

import { loggerOptions } from "./loggerOptions";

export const logger = pino(loggerOptions);
