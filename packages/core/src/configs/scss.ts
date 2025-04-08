import { GLOB_SCSS, GLOB_VUE } from "../globs";
import type { ConfigOverride, InternalScssOptions } from "../types";

export function scss(options: InternalScssOptions = {}): ConfigOverride[] {
  const {
    vue = false,
    uniapp = false
  } = options;

  return [
    {
      name: "xiaohe/scss/rules",
      files: [
        ...GLOB_SCSS,
        ...vue ? GLOB_VUE : []
      ],
      rules: {
        "annotation-no-unknown": null,
        "at-rule-no-unknown": null,
        "comment-no-empty": null,
        "function-no-unknown": null,
        "media-query-no-invalid": null,
        "no-invalid-position-at-import-rule": [
          true,
          {
            ignoreAtRules: [
              "use",
              "forward"
            ]
          }
        ],

        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-if-no-null": true,
        "scss/at-rule-no-unknown": true,
        "scss/comment-no-empty": true,
        "scss/declaration-nested-properties-no-divided-groups": true,
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/function-quote-no-quoted-strings-inside": true,
        "scss/function-unquote-no-unquoted-strings-inside": true,
        "scss/load-no-partial-leading-underscore": true,
        "scss/load-partial-extension": "never",
        "scss/no-duplicate-mixins": true,
        "scss/no-global-function-names": true,
        "scss/operator-no-newline-after": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true,

        ...uniapp
          ? {
              "scss/load-partial-extension": "always"
            }
          : {},

        ...options.overrides
      }
    }
  ];
}