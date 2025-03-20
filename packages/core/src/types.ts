import type { Config } from "stylelint";

export type Arrayable<T> = T | T[];

export type ConfigOverride = Omit<Config, "overrides"> & {
  files: string | string[];
  name?: string;
};

export type UserConfigOverride = Omit<ConfigOverride, "files">;

export interface UserConfig {
  common?: UserConfigOverride;
  css?: UserConfigOverride;
  html?: UserConfigOverride;
  scss?: boolean | UserConfigOverride;
  vue?: boolean | UserConfigOverride;
  overrides?: ConfigOverride[];
}