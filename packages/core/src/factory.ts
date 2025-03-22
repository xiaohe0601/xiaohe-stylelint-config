import type { Config } from "stylelint";
import { core, css, html, scss, vue } from "./configs";
import { SCSS_PACKAGES, VUE_PACKAGES } from "./constants";
import { isPkgExists } from "./helpers";
import type { ConfigOverride, ConfigRules, OptionsConfig, OptionsOverrides } from "./types";

export function defineConfig(
  options: OptionsConfig & Omit<Config, "overrides"> = {},
  ...userOverrides: ConfigOverride[]
): Config {
  const {
    css: enableCss = true,
    html: enableHtml = true,
    scss: enableScss = isPkgExists(SCSS_PACKAGES),
    vue: enableVue = isPkgExists(VUE_PACKAGES)
  } = options;

  const overrides = [
    ...core({
      overrides: getOverrides(options.core)
    })
  ];

  if (enableCss) {
    overrides.push(
      ...css({
        overrides: getOverrides(options.css)
      })
    );
  }

  if (enableHtml) {
    overrides.push(
      ...html({
        overrides: getOverrides(options.html)
      })
    );
  }

  if (enableScss) {
    overrides.push(
      ...scss({
        overrides: getOverrides(options.scss)
      })
    );
  }

  if (enableVue) {
    overrides.push(
      ...vue({
        overrides: getOverrides(options.vue),
        scss: !!enableScss
      })
    );
  }

  overrides.push(...userOverrides);

  return {
    defaultSeverity: "error",
    allowEmptyInput: true,
    overrides,
    rules: {},
    ...options
  };
}

function getOverrides(options?: boolean | OptionsOverrides): ConfigRules {
  if (options == null || typeof options === "boolean") {
    return {};
  }

  return options.overrides || {};
}