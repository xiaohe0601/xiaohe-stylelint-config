import { omit } from "lodash-es";
import { GLOB_CSS, GLOB_HTML, GLOB_SCSS, GLOB_VUE } from "../globs";
import type { ConfigOverride, UserConfigOverride } from "../types";

export function common(config: UserConfigOverride = {}): ConfigOverride {
  return {
    defaultSeverity: "error",
    allowEmptyInput: true,
    files: [
      ...GLOB_CSS,
      ...GLOB_SCSS,
      ...GLOB_HTML,
      ...GLOB_VUE
    ],
    extends: [
      "stylelint-config-standard",
      "stylelint-config-recess-order"
    ],
    rules: {
      "alpha-value-notation": "number",
      "color-function-notation": "legacy",
      "color-hex-length": "long",
      "declaration-block-no-redundant-longhand-properties": [
        true,
        {
          ignoreShorthands: [
            "inset"
          ]
        }
      ],
      "declaration-property-value-no-unknown": null,
      "font-family-no-missing-generic-family-keyword": null,
      "length-zero-no-unit": [
        true,
        {
          ignore: ["custom-properties"],
          ignoreFunctions: ["/^--/", "var"]
        }
      ],
      "no-empty-source": null,
      "selector-class-pattern": [
        "^([#a-z][$#{}a-z0-9]*)((-{1,2}|_{2})[$#{}a-z0-9]+)*$",
        {
          message(selector: string) {
            return `Expected class selector "${selector}" to be the BEM style (block-element[__element][--modifier]).`;
          }
        }
      ],
      "selector-not-notation": "simple",
      "selector-type-no-unknown": null,
      ...config.rules
    },
    ...omit(config, ["rules"])
  };
}