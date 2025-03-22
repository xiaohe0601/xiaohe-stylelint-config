import { GLOB_CSS } from "../globs";
import type { ConfigOverride, OptionsOverrides } from "../types";

export function css(options: OptionsOverrides = {}): ConfigOverride[] {
  return [
    {
      name: "xiaohe/css/rules",
      files: GLOB_CSS,
      rules: {
        ...options.overrides
      }
    }
  ];
}