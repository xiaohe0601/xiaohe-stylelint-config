import { GLOB_VUE } from "../globs";
import type { ConfigOverride, OptionsOverrides } from "../types";

export function vue(options: OptionsOverrides = {}): ConfigOverride[] {
  return [
    {
      files: GLOB_VUE,
      extends: [
        "stylelint-config-recommended-vue"
      ],
      rules: {
        ...options.overrides
      }
    }
  ];
}