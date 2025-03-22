import type { Config } from "stylelint";

export type Arrayable<T> = T | T[];

export type ConfigOverride = Omit<Config, "overrides"> & {
  files: string | string[];
  name?: string;
};

export type ConfigRules = Config["rules"];

export interface OptionsOverrides {
  overrides?: ConfigRules;
}

export interface OptionsVue extends OptionsOverrides {
  /**
   * Enable Scss support.
   *
   * @default false
   */
  scss?: boolean;
}

export interface OptionsConfig {
  /**
   * Core rules. Can't be disabled.
   */
  core?: OptionsOverrides;
  /**
   * Enable CSS support.
   *
   * @default true
   */
  css?: boolean | OptionsOverrides;
  /**
   * Enable HTML support.
   *
   * @default true
   */
  html?: boolean | OptionsOverrides;
  /**
   * Enable Scss support.
   *
   * @default auto-detect based on the dependencies
   */
  scss?: boolean | OptionsOverrides;
  /**
   * Enable Vue support.
   *
   * @default auto-detect based on the dependencies
   */
  vue?: boolean | OptionsVue;
}