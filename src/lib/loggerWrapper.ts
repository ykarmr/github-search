import { isRedirectError } from "next/dist/client/components/redirect-error";

import { logger } from "./logger";
import "server-only";

export async function loggerWrapper(
  path: string,
  fn: () => Promise<unknown>,
): Promise<unknown> {
  logger.info({ path }, `リクエストを受け取りました`);

  try {
    const result = await fn();
    logger.info({ path }, `リクエストが成功しました`);
    return result;
  } catch (error) {
    if (isRedirectError(error)) {
      // try,catch内でredirect出来ない問題の対策
      const redirectUrl = error.digest?.split(";")[2] || "unknown";
      logger.info({ path, redirectUrl }, `リダイレクトしました`);
    } else {
      logger.error(
        {
          path,
          error: JSON.stringify(error),
        },
        `リクエストが失敗しました`,
      );
    }

    throw error;
  }
}
