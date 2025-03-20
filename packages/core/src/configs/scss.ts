import { omit } from "lodash-es";
import { GLOB_SCSS } from "../globs";
import type { ConfigOverride, UserConfigOverride } from "../types";

export function scss(config: UserConfigOverride = {}): ConfigOverride {
  return {
    files: GLOB_SCSS,
    customSyntax: "postcss-scss",
    extends: [
      "stylelint-config-standard-scss"
    ],
    plugins: [
      "stylelint-scss"
    ],
    rules: {
      ...config.rules
    },
    ...omit(config, ["rules"])
  };
}