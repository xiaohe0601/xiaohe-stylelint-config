import { isPackageExists } from "local-pkg";
import type { Arrayable } from "./types";

export function castArray<T>(value: Arrayable<T>): T[] {
  return Array.isArray(value) ? value : [value];
}

export function isPkgExists(pkg: Arrayable<string>): boolean {
  return castArray(pkg).some((it) => isPackageExists(it));
}