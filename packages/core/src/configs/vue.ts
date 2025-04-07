import { GLOB_VUE } from "../globs";
import type { ConfigOverride, OptionsOverrides } from "../types";

export function vue(options: OptionsOverrides = {}): ConfigOverride[] {
  return [
    {
      name: "xiaohe/vue/rules",
      files: GLOB_VUE,
      rules: {
        ...options.overrides
      }
    }
  ];
}