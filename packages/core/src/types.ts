import type { Config } from "stylelint";

export type Arrayable<T> = T | T[];

export type ConfigOverride = Omit<Config, "overrides"> & {
  files: string | string[];
  name?: string;
};

export type ConfigRules = Config["rules"];

export interface SetupOptions {
  /**
   * Enable Scss support.
   *
   * @default false
   */
  scss?: boolean;
  /**
   * Enable HTML support.
   *
   * @default false
   */
  html?: boolean;
  /**
   * Enable Vue support.
   *
   * @default false
   */
  vue?: boolean;
}

export interface OptionsOverrides {
  overrides?: ConfigRules;
}

export interface InternalCoreOptions extends OptionsOverrides {
  /**
   * Enable Vue support.
   *
   * @default false
   */
  vue?: boolean;
}

export interface InternalScssOptions extends OptionsOverrides {
  /**
   * Enable Vue support.
   *
   * @default false
   */
  vue?: boolean;
}

export interface OptionsConfig {
  /**
   * Core rules. Can't be disabled.
   */
  core?: OptionsOverrides;
  /**
   * CSS rules.
   */
  css?: OptionsOverrides;
  /**
   * Enable Scss support.
   *
   * @default auto-detect based on the dependencies
   */
  scss?: boolean | OptionsOverrides;
  /**
   * Enable HTML support.
   *
   * @default true
   */
  html?: boolean | OptionsOverrides;
  /**
   * Enable Vue support.
   *
   * @default auto-detect based on the dependencies
   */
  vue?: boolean | OptionsOverrides;
}