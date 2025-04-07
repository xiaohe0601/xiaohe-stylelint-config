import { GLOB_HTML, GLOB_SCSS, GLOB_VUE } from "../globs";
import type { ConfigOverride, SetupOptions } from "../types";

export function setup(options: SetupOptions = {}): ConfigOverride[] {
  const {
    scss = false,
    html = false,
    vue = false
  } = options;

  const overrides: ConfigOverride[] = [];

  if (html) {
    overrides.push({
      name: "xiaohe/html/setup",
      files: GLOB_HTML,
      customSyntax: "postcss-html"
    });
  }

  if (vue) {
    overrides.push({
      name: "xiaohe/vue/setup",
      files: GLOB_VUE,
      customSyntax: "postcss-html",
      plugins: [
        ...scss
          ? [
              "stylelint-scss"
            ]
          : []
      ]
    });
  }

  if (scss) {
    overrides.push({
      name: "xiaohe/scss/setup",
      files: GLOB_SCSS,
      customSyntax: "postcss-scss",
      plugins: [
        "stylelint-scss"
      ]
    });
  }

  return overrides;
}