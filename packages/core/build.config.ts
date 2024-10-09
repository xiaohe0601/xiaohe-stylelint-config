import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts"
  ],
  clean: true,
  declaration: true,
  externals: [
    "stylelint",
    "lodash-es",
    "local-pkg"
  ],
  rollup: {
    emitCJS: true
  }
});