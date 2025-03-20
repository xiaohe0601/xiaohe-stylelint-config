import { omit } from "lodash-es";
import { GLOB_HTML } from "../globs";
import type { ConfigOverride, UserConfigOverride } from "../types";

export function html(config: UserConfigOverride = {}): ConfigOverride {
  return {
    files: GLOB_HTML,
    customSyntax: "postcss-html",
    rules: {
      ...config.rules
    },
    ...omit(config, ["rules"])
  };
}