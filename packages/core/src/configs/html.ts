import { GLOB_HTML } from "../globs";
import type { ConfigOverride, OptionsOverrides } from "../types";

export function html(options: OptionsOverrides = {}): ConfigOverride[] {
  return [
    {
      name: "xiaohe/html/rules",
      files: GLOB_HTML,
      rules: {
        ...options.overrides
      }
    }
  ];
}