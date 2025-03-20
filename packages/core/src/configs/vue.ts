import { omit } from "lodash-es";
import { GLOB_VUE } from "../globs";
import type { ConfigOverride, UserConfigOverride } from "../types";

export function vue(config: UserConfigOverride = {}): ConfigOverride {
  return {
    files: GLOB_VUE,
    customSyntax: "postcss-html",
    extends: [
      "stylelint-config-recommended-vue"
    ],
    rules: {
      ...config.rules
    },
    ...omit(config, ["rules"])
  };
}