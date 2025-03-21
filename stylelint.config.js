import { defineConfig } from "@xiaohe01/stylelint-config";

export default defineConfig({
  scss: true,
  vue: true,
  ignoreFiles: [
    "**/node_modules/**",
    "**/public/**",
    "**/dist/**"
  ]
});