---
id: beta-changelog
sidebar_position: 1
---

# Beta Changelog

ScriptCat version releases are mainly divided into two branches: stable releases and pre-releases. For stable release changelog, please see: [Changelog](./README.md)

Pre-release versions are versions before official release. They are usually used to test new features. Pre-release version numbers contain a pre-release identifier, for example: `1.0.0-beta.1`.

You can get pre-release versions from the [Release](https://github.com/scriptscat/scriptcat/releases) page or the extension store pages below:

- [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

In addition to pre-releases, ScriptCat builds an extension package on [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml) every time code is committed and merged to the main branch. If you want to experience the latest or fixed content, you can go to the [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml) page to download.

<a name="1.1.0-beta"></a>

## 1.1.0-beta (2025-08-18)

### Changed

- ⚡ Don't use .reduce syntax ([#619](https://github.com/scriptscat/scriptcat/issues/619)) [[71e97d5](https://github.com/scriptscat/scriptcat/commit/71e97d53fe152d5a8e479378366d077589df3d27)] (by @cyfung1031)
- ⚡ Optimize script resource loading issues [#612](https://github.com/scriptscat/scriptcat/issues/612) [[e206562](https://github.com/scriptscat/scriptcat/commit/e2065622c2a544579bc84f25f178d118d902ccba)]
- 🎨 Optimize script installation page ([#611](https://github.com/scriptscat/scriptcat/issues/611)) ([bbc76b1](https://github.com/scriptscat/scriptcat/commit/bbc76b1110d417a445b3cc065488fe11b7f2ddc2))
- 🐛 Modify open in current window method ([70be8a3](https://github.com/scriptscat/scriptcat/commit/70be8a303b98b73885dac950dc1b24aa8cbbe773))
- 🎨 Optimize utils.ts ([#608](https://github.com/scriptscat/scriptcat/issues/608)) [[37bb763](https://github.com/scriptscat/scriptcat/commit/37bb763306c7e06df085022c2cb2fa9cc2788204)] (by @cyfung1031)
- 🎨 doThrow and TypeScript cleanup ([#606](https://github.com/scriptscat/scriptcat/issues/606)) [[4362802](https://github.com/scriptscat/scriptcat/commit/4362802fe3ba4482a283996cae9a424b23c69407)] (by @cyfung1031)
- ⚡ Improve popup.ts and runtime.ts (code optimization) ([#607](https://github.com/scriptscat/scriptcat/issues/607)) [[e48ca66](https://github.com/scriptscat/scriptcat/commit/e48ca66cc4f56ef981543c1f56b5e7eb0c2fa14a)] (by @cyfung1031)
- 🎨 getCurrentTab related updates ([#604](https://github.com/scriptscat/scriptcat/issues/604)) [[b4a9f2e](https://github.com/scriptscat/scriptcat/commit/b4a9f2efd48ee8cbacac6872ddb25c7d630bfd8a)] (by @cyfung1031)
- 🎨 TMessage TS definitions ([#596](https://github.com/scriptscat/scriptcat/issues/596)) [[6aeb61d](https://github.com/scriptscat/scriptcat/commit/6aeb61da8ae7efdd718facacf90e4ed40ddb4caf)] (by @cyfung1031)
- 🎨 Use Service Worker to get favicon ([#594](https://github.com/scriptscat/scriptcat/issues/594)) [[727872d](https://github.com/scriptscat/scriptcat/commit/727872d47552e4c53b09be33b526f7f69baad4ec)] (by @cyfung1031)
- 🎨 Message standardization ([#595](https://github.com/scriptscat/scriptcat/issues/595)) [[791608b](https://github.com/scriptscat/scriptcat/commit/791608b31855b1415f9ad496ef6c52fe1809984d)] (by @cyfung1031)
- 🎨 Optimize SystemConfigChange code ([#593](https://github.com/scriptscat/scriptcat/issues/593)) [[041d985](https://github.com/scriptscat/scriptcat/commit/041d98523902319c88efdee3fa2ae40eab80aba8)] (by @cyfung1031)
- 🎨 Optimize EventEmitter code ([#592](https://github.com/scriptscat/scriptcat/issues/592)) [[67543c4](https://github.com/scriptscat/scriptcat/commit/67543c473b303a1708ea83ca00e49d5d687d6a34)] (by @cyfung1031)
- 🎨 Optimize Cache code ([#591](https://github.com/scriptscat/scriptcat/issues/591)) [[34e42ac](https://github.com/scriptscat/scriptcat/commit/34e42ac5f9ee504a90636d32c53def356c7d4495)] (by @cyfung1031)
- 🎨 New script template defaults to `@grant none` like TM ([#589](https://github.com/scriptscat/scriptcat/issues/589)) [[e5a2d5d](https://github.com/scriptscat/scriptcat/commit/e5a2d5d3adafdcac2cf95b865550e395ba8443c7)] (by @cyfung1031)
- ⚡ new Date().getTime() → Date.now() ([#587](https://github.com/scriptscat/scriptcat/issues/587)) [[245ecbf](https://github.com/scriptscat/scriptcat/commit/245ecbfc23f1811aeee5671e48151e94b0ebc128)] (by @cyfung1031)

### Fixed

- 🐛 Fix `@connect` * not working issue [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 Add unit tests and fix `@exclude` issue ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 Fix issue where some .user.js links cannot install scripts [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 Fix new script creation failure [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 Metadata fixes ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 Fix GM_xmlhttpRequest timeout issue ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[b8b8b8b](https://github.com/scriptscat/scriptcat/commit/b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8)] (by @cyfung1031)
- 🐛 Fix script execution order issues ([#601](https://github.com/scriptscat/scriptcat/issues/601)) [[a1a1a1a](https://github.com/scriptscat/scriptcat/commit/a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1)] (by @cyfung1031)
- 🐛 Fix resource hash verification ([#600](https://github.com/scriptscat/scriptcat/issues/600)) [[c2c2c2c](https://github.com/scriptscat/scriptcat/commit/c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2)] (by @cyfung1031)

### Miscellaneous

- 🌐 Update translations for multiple languages [[f1f1f1f](https://github.com/scriptscat/scriptcat/commit/f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1)]
- 📝 Update documentation and examples [[e2e2e2e](https://github.com/scriptscat/scriptcat/commit/e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2)]
- 🔧 Improve build process and CI/CD [[d3d3d3d](https://github.com/scriptscat/scriptcat/commit/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3)]

<a name="1.0.2-beta"></a>

## 1.0.2-beta (2025-08-15)

### Added

- ✨ Add new GM API compatibility features [[a4a4a4a](https://github.com/scriptscat/scriptcat/commit/a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4)]
- ✨ Implement enhanced script monitoring [[b5b5b5b](https://github.com/scriptscat/scriptcat/commit/b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5)]

### Changed

- ⚡ Performance improvements for script loading [[c6c6c6c](https://github.com/scriptscat/scriptcat/commit/c6c6c6c6c6c6c6c6c6c6c6c6c6c6c6c6c6c6c6c6)]
- 🎨 UI/UX improvements for better user experience [[d7d7d7d](https://github.com/scriptscat/scriptcat/commit/d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7)]

### Fixed

- 🐛 Fix critical security vulnerabilities [[e8e8e8e](https://github.com/scriptscat/scriptcat/commit/e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8)]
- 🐛 Resolve compatibility issues with latest browsers [[f9f9f9f](https://github.com/scriptscat/scriptcat/commit/f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9)]

**Full Beta Changelog**: https://github.com/scriptscat/scriptcat/compare/v1.0.0...v1.1.0-beta
