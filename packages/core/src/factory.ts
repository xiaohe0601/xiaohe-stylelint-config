import type { Config } from "stylelint";
import { core, css, html, scss, vue } from "./configs";
import { SCSS_PACKAGES, VUE_PACKAGES } from "./constants";
import { isPkgExists } from "./helpers";
import type { ConfigOverride, OptionsConfig } from "./types";

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
    ...core(normalizeOptions(options.core))
  ];

  if (enableCss) {
    overrides.push(
      ...css(normalizeOptions(options.css))
    );
  }

  if (enableHtml) {
    overrides.push(
      ...html(normalizeOptions(options.html))
    );
  }

  if (enableScss) {
    overrides.push(
      ...scss(normalizeOptions(options.scss))
    );
  }

  if (enableVue) {
    overrides.push(
      ...vue(normalizeOptions(options.vue))
    );
  }

  overrides.push(...userOverrides);

  return {
    defaultSeverity: "error",
    allowEmptyInput: true,
    extends: [
      "stylelint-config-html"
    ],
    overrides,
    rules: {},
    ...options
  };
}

function normalizeOptions<T extends object>(options?: boolean | T): T {
  return typeof options === "boolean"
    ? {} as T
    : options || {} as T;
}