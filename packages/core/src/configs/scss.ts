import { GLOB_SCSS } from "../globs";
import type { ConfigOverride, OptionsOverrides } from "../types";

export function scss(options: OptionsOverrides = {}): ConfigOverride[] {
  return [
    {
      files: GLOB_SCSS,
      extends: [
        "stylelint-config-recommended-scss"
      ],
      rules: {
        ...options.overrides
      }
    }
  ];
}