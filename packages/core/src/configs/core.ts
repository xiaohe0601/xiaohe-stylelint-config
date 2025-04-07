import { GLOB_ALL } from "../globs";
import type { ConfigOverride, InternalCoreOptions } from "../types";

export function core(options: InternalCoreOptions = {}): ConfigOverride[] {
  const {
    vue = false
  } = options;

  return [
    {
      name: "xiaohe/core/rules",
      files: GLOB_ALL,
      extends: [
        "stylelint-config-recess-order"
      ],
      rules: {
        "alpha-value-notation": "number",
        "annotation-no-unknown": true,
        "at-rule-descriptor-no-unknown": true,
        "at-rule-descriptor-value-no-unknown": true,
        "at-rule-no-deprecated": true,
        "at-rule-no-unknown": true,
        "at-rule-prelude-no-invalid": [
          true,
          {
            ignoreAtRules: [
              "media"
            ]
          }
        ],
        "block-no-empty": true,
        "color-function-notation": "legacy",
        "color-hex-length": "long",
        "comment-no-empty": true,
        "custom-property-no-missing-var-function": true,
        "declaration-block-no-duplicate-custom-properties": true,
        "declaration-block-no-duplicate-properties": [
          true,
          {
            ignore: [
              "consecutive-duplicates-with-different-syntaxes"
            ]
          }
        ],
        "declaration-block-no-redundant-longhand-properties": [
          true,
          {
            ignoreShorthands: [
              "inset"
            ]
          }
        ],
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-property-value-keyword-no-deprecated": true,
        "font-family-no-duplicate-names": true,
        "function-calc-no-unspaced-operator": true,
        "keyframe-block-no-duplicate-selectors": true,
        "keyframe-declaration-no-important": true,
        "length-zero-no-unit": [
          true,
          {
            ignore: [
              "custom-properties"
            ],
            ignoreFunctions: [
              "/^--/",
              "var"
            ]
          }
        ],
        "media-feature-name-no-unknown": true,
        "media-feature-name-value-no-unknown": true,
        "media-query-no-invalid": true,
        "named-grid-areas-no-invalid": true,
        "no-descending-specificity": true,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-invalid-double-slash-comments": true,
        "no-invalid-position-at-import-rule": true,
        "no-irregular-whitespace": true,
        "property-no-unknown": true,
        "selector-anb-no-unmatchable": true,
        "selector-class-pattern": [
          "^([#a-z][$#{}a-z0-9]*)((-{1,2}|_{2})[$#{}a-z0-9]+)*$",
          {
            message(selector: string) {
              return `Expected class selector "${selector}" to be the BEM style (block-element[__element][--modifier]).`;
            }
          }
        ],
        "selector-not-notation": "simple",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": true,
        "string-no-newline": [
          true,
          {
            ignore:
              [
                "at-rule-preludes",
                "declaration-values"
              ]
          }
        ],

        ...vue
          ? {
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
              ]
            }
          : {},

        ...options.overrides
      }
    }
  ];
}