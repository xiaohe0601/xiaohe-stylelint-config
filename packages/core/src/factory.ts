import type { Config } from "stylelint";
import { core, css, html, scss, setup, vue } from "./configs";
import { SCSS_PACKAGES, VUE_PACKAGES } from "./constants";
import { isPkgExists } from "./helpers";
import type { ConfigOverride, ConfigRules, OptionsConfig, OptionsOverrides } from "./types";

export function defineConfig(
  options: OptionsConfig & Omit<Config, "overrides"> = {},
  ...userOverrides: ConfigOverride[]
): Config {
  const {
    scss: enableScss = isPkgExists(SCSS_PACKAGES),
    html: enableHtml = true,
    vue: enableVue = isPkgExists(VUE_PACKAGES)
  } = options;

  const overrides = [
    ...setup({
      scss: !!enableScss,
      html: !!enableHtml,
      vue: !!enableVue
    }),
    ...core({
      overrides: getOverrides(options.core),
      vue: !!enableVue
    }),
    ...css({
      overrides: getOverrides(options.css)
    })
  ];

  if (enableScss) {
    overrides.push(
      ...scss({
        overrides: getOverrides(options.scss),
        vue: !!enableVue
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

  if (enableVue) {
    overrides.push(
      ...vue({
        overrides: getOverrides(options.vue)
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