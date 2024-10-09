import { isPackageExists } from "local-pkg";
import { castArray } from "lodash-es";
import type { Arrayable } from "./types";

export function isPkgExists(pkg: Arrayable<string>): boolean {
  return castArray(pkg).some((it) => isPackageExists(it));
}