import { omit } from "lodash-es";
import { GLOB_CSS } from "../globs";
import type { ConfigOverride, UserConfigOverride } from "../types";

export function css(config: UserConfigOverride = {}): ConfigOverride {
  return {
    files: GLOB_CSS,
    rules: {
      ...config.rules
    },
    ...omit(config, ["rules"])
  };
}