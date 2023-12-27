"use strict";
import { memo_, rmemo__wait } from "ctx-core/rmemo";
import { browser__metafile_ } from "../browser/index.js";
import { app_ctx } from "../ctx/index.js";
import { server__metafile_ } from "../server/index.js";
export async function metafile__wait(timeout = 5e3) {
  await rmemo__wait(
    memo_(() => server__metafile_(app_ctx) && browser__metafile_(app_ctx)),
    (val) => val !== void 0,
    timeout
  ).catch((err) => {
    throw Error("metafile__wait|browser & server metafile timeout", { cause: err });
  });
}
