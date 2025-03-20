import type { Config } from "stylelint";
import { common, css, html, scss, vue } from "./configs";
import { SCSS_PACKAGES, VUE_PACKAGES } from "./constants";
import { isPkgExists } from "./helpers";
import type { UserConfig, UserConfigOverride } from "./types";

function getUserOverride(config?: boolean | UserConfigOverride): UserConfigOverride {
  return typeof config === "boolean" ? {} : config || {};
}

export function defineConfig(config: UserConfig = {}): Config {
  const {
    scss: enableScss = isPkgExists(SCSS_PACKAGES),
    vue: enableVue = isPkgExists(VUE_PACKAGES)
  } = config;

  const overrides = [
    common(config.common),
    css(config.css),
    html(config.html)
  ];

  if (enableScss) {
    overrides.push(
      scss(getUserOverride(config.scss))
    );
  }

  if (enableVue) {
    overrides.push(
      vue(getUserOverride(config.vue))
    );
  }

  if (config.overrides) {
    overrides.push(...config.overrides);
  }

  return {
    overrides,
    rules: {}
  };
}