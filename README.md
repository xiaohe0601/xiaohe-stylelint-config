<div align="center">
  <h1>xiaohe-stylelint-config</h1>
  <span>🤚 Stylelint config preset for xiaohe</span>
</div>

<br>

[![github stars][github-stars-src]][github-stars-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Xiaohe / [github@xiaohe0601](https://github.com/xiaohe0601) / [gitee@xiaohe0601](https://gitee.com/xiaohe0601)

### 🚁 Installation

#### PNPM

``` shell
pnpm add -D stylelint @xiaohe01/stylelint-config
```

#### YARN

``` shell
yarn add --dev stylelint @xiaohe01/stylelint-config
```

#### NPM

``` shell
npm install -D stylelint @xiaohe01/stylelint-config
```

### 🛹 Usage

Create `stylelint.config.js` in your project root

```js
import defineConfig from "@xiaohe01/stylelint-config";

export default defineConfig();
```

Add script for `package.json`, for example

```json
{
  "scripts": {
    "stylelint": "stylelint **/*.{css,scss,vue,html}",
    "stylelint:fix": "stylelint **/*.{css,scss,vue,html} --fix"
  }
}
```

For more information, please refer to [stylelint](https://stylelint.io).

### 🐶 Discussion & Communication

- ❓：For questions or bug feedback, you can submit an [issues](https://github.com/xiaohe0601/xiaohe-stylelint-config/issues)
  and PRs are welcome~
- 📫：[xiaohe0601@outlook.com](mailto:xiaohe0601@outlook.com)
- 🐧：Not yet available

### 🏆 License

- MIT [LICENSE](./LICENSE)

<!-- Badges -->

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/xiaohe-stylelint-config?style=flat&colorA=080f12&colorB=1fa669&logo=GitHub

[github-stars-href]: https://github.com/xiaohe0601/xiaohe-stylelint-config

[npm-version-src]: https://img.shields.io/npm/v/@xiaohe01/stylelint-config?style=flat&colorA=080f12&colorB=1fa669

[npm-version-href]: https://npmjs.com/package/@xiaohe01/stylelint-config

[npm-downloads-src]: https://img.shields.io/npm/dm/@xiaohe01/stylelint-config?style=flat&colorA=080f12&colorB=1fa669

[npm-downloads-href]: https://npmjs.com/package/@xiaohe01/stylelint-config

[bundle-src]: https://img.shields.io/bundlephobia/minzip/@xiaohe01/stylelint-config?style=flat&colorA=080f12&colorB=1fa669&label=minzip

[bundle-href]: https://bundlephobia.com/result?p=@xiaohe01/stylelint-config

[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669

[jsdocs-href]: https://www.jsdocs.io/package/@xiaohe01/stylelint-config

[license-src]: https://img.shields.io/github/license/xiaohe0601/xiaohe-stylelint-config.svg?style=flat&colorA=080f12&colorB=1fa669

[license-href]: https://github.com/xiaohe0601/xiaohe-stylelint-config/blob/main/LICENSE