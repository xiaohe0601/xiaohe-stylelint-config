import { castArray, isEmpty, merge, omit } from "lodash-es";
import type { Config } from "stylelint";
import { SCSS_PACKAGES, UNIAPP_PACKAGE, VUE_PACKAGES } from "./constants";
import { isPkgExists } from "./helpers";
import type { ConfigExtends, ConfigOptions, ConfigOverrides, ConfigPlugins, ConfigPresets, ConfigRules } from "./types";

function buildExtends(options: ConfigOptions): ConfigExtends {
  if (!isEmpty(options.overrideExtends)) {
    return castArray(options.overrideExtends);
  }

  const {
    scss: enableScss,
    vue: enableVue
  } = options.presets!;

  const extendz: ConfigExtends = [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-html",
    "stylelint-config-recess-order"
  ];

  if (enableScss) {
    extendz.push("stylelint-config-standard-scss");
  }

  if (enableVue) {
    extendz.push("stylelint-config-recommended-vue");
  }

  if (!isEmpty(options.extends)) {
    extendz.push(...castArray(options.extends));
  }

  return extendz;
}

function buildPlugins(options: ConfigOptions): ConfigPlugins {
  if (!isEmpty(options.overridePlugins)) {
    return castArray(options.overridePlugins);
  }

  const plugins: ConfigPlugins = [
    "stylelint-order"
  ];

  if (!isEmpty(options.plugins)) {
    plugins.push(...castArray(options.plugins));
  }

  return plugins;
}

function buildRules(options: ConfigOptions): ConfigRules {
  const {
    scss: enableScss,
    vue: enableVue,
    uniapp: enableUniApp
  } = options.presets!;

  const disables: ConfigRules = {
    "unit-no-unknown": null,
    "no-empty-source": null,
    "at-rule-no-unknown": null,
    "value-keyword-case": null,
    "selector-not-notation": null,
    "no-duplicate-selectors": null,
    "font-family-name-quotes": null,
    "no-descending-specificity": null,
    "custom-property-empty-line-before": null,
    "font-family-no-missing-generic-family-keyword": null
  };

  if (enableScss) {
    merge(disables, {
      "scss/at-extend-no-missing-placeholder": null
    });
  }

  const rules: ConfigRules = {
    ...disables,
    "color-hex-length": ["long", {
      message: "Hexadecimal colors need to use the long format style (#ffffff)"
    }],
    "length-zero-no-unit": [true, {
      ignoreFunctions: ["/^--/", "var", "calc"]
    }],
    "alpha-value-notation": "number",
    "selector-class-pattern": ["^([#a-z][$#{}a-z0-9]*)((-{1,2}|_{2})[$#{}a-z0-9]+)*$", {
      message: "Class naming should follow the BEM style (block-element[__element][--modifier])"
    }],
    "color-function-notation": "legacy",
    "declaration-block-no-redundant-longhand-properties": [true, {
      ignoreShorthands: ["inset"]
    }]
  };

  if (enableScss) {
    merge(rules, {
      "scss/load-partial-extension": "always"
    });
  }

  if (enableVue) {
    merge(rules, {
      "selector-pseudo-class-no-unknown": [true, {
        ignorePseudoClasses: ["deep"]
      }]
    });
  }

  if (enableUniApp) {
    merge(rules, {
      "selector-type-no-unknown": null
    });
  }

  if (!isEmpty(options.rules)) {
    merge(rules, options.rules);
  }

  return rules;
}

export function buildOverrides(options: ConfigOptions): ConfigOverrides {
  if (!isEmpty(options.overrideOverrides)) {
    return options.overrideOverrides;
  }

  const overrides: ConfigOverrides = [{
    files: ["*.html", "*.vue"],
    customSyntax: "postcss-html"
  }, {
    files: ["*.scss"],
    customSyntax: "postcss-scss"
  }];

  if (!isEmpty(options.overrides)) {
    overrides.push(...castArray(options.overrides));
  }

  return overrides;
}

export function defineConfig(options: ConfigOptions = {}): Config {
  const presets: ConfigPresets = merge({
    scss: isPkgExists(SCSS_PACKAGES),
    vue: isPkgExists(VUE_PACKAGES),
    uniapp: isPkgExists(UNIAPP_PACKAGE)
  }, options.presets);

  const finalOptions: ConfigOptions = {
    ...options,
    presets
  };

  return {
    allowEmptyInput: true,
    cache: true,
    defaultSeverity: "error",
    extends: buildExtends(finalOptions),
    plugins: buildPlugins(finalOptions),
    rules: buildRules(finalOptions),
    overrides: buildOverrides(finalOptions),
    ...omit(options, [
      "extends",
      "plugins",
      "rules",
      "overrides"
    ])
  };
}