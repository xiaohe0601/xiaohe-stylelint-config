import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts"
  ],
  clean: true,
  declaration: true,
  externals: [
    "stylelint",
    "local-pkg"
  ],
  rollup: {
    emitCJS: true
  }
});