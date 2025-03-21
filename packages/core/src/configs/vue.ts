import { GLOB_VUE } from "../globs";
import type { ConfigOverride, OptionsVue } from "../types";

export function vue(options: OptionsVue = {}): ConfigOverride[] {
  const {
    scss = false
  } = options;

  return [
    {
      name: "xiaohe/vue/setup",
      files: GLOB_VUE,
      customSyntax: "postcss-html"
    },
    {
      name: "xiaohe/vue/rules",
      files: GLOB_VUE,
      rules: {
        "declaration-property-value-no-unknown": [
          true,
          {
            ignoreProperties: {
              "/.*/": "/v-bind\\(.+\\)/"
            }
          }
        ],
        "function-no-unknown": [
          true,
          {
            ignoreFunctions: [
              "v-bind"
            ]
          }
        ],
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: [
              "deep",
              "global",
              "slotted"
            ]
          }
        ],
        "selector-pseudo-element-no-unknown": [
          true,
          {
            ignorePseudoElements: [
              "v-deep",
              "v-global",
              "v-slotted"
            ]
          }
        ],

        ...scss
          ? {
              "function-no-unknown": null
            }
          : {},

        ...options.overrides
      }
    }
  ];
}