import type { Config, ConfigRuleSettings, Plugin } from "stylelint";

export type Arrayable<T> = T | T[];

export type ConfigExtend = string;
export type ConfigExtends = ConfigExtend[];

export type ConfigPlugin = string | Plugin;
export type ConfigPlugins = ConfigPlugin[];

export type ConfigRule = ConfigRuleSettings<any, object>;

export interface ConfigRules {
  [key: string]: ConfigRule;
}

export interface ConfigPresets {
  scss?: boolean;
  vue?: boolean;
  uniapp?: boolean;
}

export interface ConfigOptions extends Config {
  presets?: ConfigPresets;
  overrideExtends?: Config["extends"];
  overridePlugins?: Config["plugins"];
}