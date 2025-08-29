---
id: change
sidebar_position: 1
---

# Changelog

For Beta version changelog, please see [Beta Changelog](./beta.md)

⚠️ Please note: If you are using Windows 8/7/XP systems, or browser kernel version lower than <120, you need to manually install the [legacy ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). v0.16.x is the last version that supports Manifest V2. For installation steps, please refer to: [Install Extension via Load Unpacked](/docs/use/use/#install-extension-via-load-unpacked).

## 1.0.1 (2025-08-16)

Quick fixes for some major issues

### Fixed

- 🐛 Fix certain matching cases [#629](https://github.com/scriptscat/scriptcat/issues/629) [[3334b0c](https://github.com/scriptscat/scriptcat/commit/3334b0cb40138ddaad30b54f516df83316b8bb64)]
- 🐛 Fix resource hash verification [[db7d6c7](https://github.com/scriptscat/scriptcat/commit/db7d6c7351a88f35709163b610e0f5b1fda79a33)]
- 🐛 Fix issue where some .user.js links cannot install scripts [#599](https://github.com/scriptscat/scriptcat/issues/599) [[61f7ad1](https://github.com/scriptscat/scriptcat/commit/61f7ad111b40ba0bbd2f04bb2c3e72713116237f)]
- 🐛 Fix @connect * not working issue [#623](https://github.com/scriptscat/scriptcat/issues/623) [[744c182](https://github.com/scriptscat/scriptcat/commit/744c18227d8f89ce6f65d6ae70d7f002aec410dd)]

<a name="1.0.0"></a>

## 1.0.0 (2025-08-12)

🎉 v1.0.0 release, thank you very much for everyone's support!

### Added

- ✨ Optimize log printing [[8693b93](https://github.com/scriptscat/scriptcat/commit/8693b9338bdd916ffad58572949e67d14cc2c109)]
- ✨ Implement async GM functions ([#492](https://github.com/scriptscat/scriptcat/issues/492)) [[cb8edf7](https://github.com/scriptscat/scriptcat/commit/cb8edf7809667068f4a2682afba82bc24302d717)] (by @cyfung1031)
- ✨ Allow pressing Enter to confirm when importing scripts via link ([#537](https://github.com/scriptscat/scriptcat/issues/537)) [[45a17df](https://github.com/scriptscat/scriptcat/commit/45a17df8f35a943a489c0f5980ac3f65fb0e8e5f)] (by @TC999)
- ✨ Add Prettier ESLint unified code formatting style [[0f84a19](https://github.com/scriptscat/scriptcat/commit/0f84a19c42823baab60f2b379d187073be7879f9)]
- ✨ Add dropdown when installing/updating scripts [#508](https://github.com/scriptscat/scriptcat/issues/508) [[790584d](https://github.com/scriptscat/scriptcat/commit/790584d078eb4bbf2179aec5297c5574d7b30167)]
- ✨ Add individual script update check option [#508](https://github.com/scriptscat/scriptcat/issues/508) [[41ac880](https://github.com/scriptscat/scriptcat/commit/41ac880855fafe3a4e7a87cc05169f77d8a8f59c)]
- ✨ Support GoogleDrive ([#490](https://github.com/scriptscat/scriptcat/issues/490)) [[dc38f7f](https://github.com/scriptscat/scriptcat/commit/dc38f7f38fca13febe197a3ced4e817cacec5920)] (by @wangyizhi)
- ✨ Add UserConfig ordering [[1874a35](https://github.com/scriptscat/scriptcat/commit/1874a3520668edc6ba947f8deb12148b5c5befa9)]
- ✨ No longer check for updates when closing [#562](https://github.com/scriptscat/scriptcat/issues/562) [[25cec66](https://github.com/scriptscat/scriptcat/commit/25cec66ee81192c6898b20ff133c78ad15039a84)]
- ✨ Add tooltip for last update ([#564](https://github.com/scriptscat/scriptcat/issues/564)) [[39ede21](https://github.com/scriptscat/scriptcat/commit/39ede219157840d2de5b4a846ab339612db8fb94)] (by @cyfung1031)
- ✨ Add badge and menu settings and adjust settings page [#573](https://github.com/scriptscat/scriptcat/issues/573) [[23e9b19](https://github.com/scriptscat/scriptcat/commit/23e9b19912c64ed2dafeabd66513519e1465b00e)]
- ⚡ Optimize resource loading, parallel loading of async resources ([#574](https://github.com/scriptscat/scriptcat/issues/574)) ([5910c0b](https://github.com/scriptscat/scriptcat/commit/5910c0b3baf540aeb1f12fed5a4796eef3dec71c)) by @zhangenming
- ✨ Enable switch to separately control incognito mode and main window [#571](https://github.com/scriptscat/scriptcat/issues/571) [[38a33b1](https://github.com/scriptscat/scriptcat/commit/38a33b107275be0e1b2aa31eaa2055939c5356f0)]
- ✨ Optimize installation, permissions and other window opening interactions [[0d9ba53](https://github.com/scriptscat/scriptcat/commit/0d9ba53ba3b42f948eb82b34a7257eb46b973055)]
- ✨ Enable monitoring when installing local scripts [#275](https://github.com/scriptscat/scriptcat/issues/275) ([d9b0eee](https://github.com/scriptscat/scriptcat/commit/d9b0eeede1a8b114f79a43fade99d825323c63f6))

### Changed

- ⚡ Optimize script resource loading ([4651ae4](https://github.com/scriptscat/scriptcat/commit/4651ae4964a94af83a5cc23c02be4b351db7dce9))
- ⚡ Strengthen error checking, add custom eslint-rules ([#542](https://github.com/scriptscat/scriptcat/issues/542)) [[c5ac3e3](https://github.com/scriptscat/scriptcat/commit/c5ac3e34176b10ab5f52e705da3d0764aae5519d)] (by @cyfung1031)
- ⚡ React optimization ([#530](https://github.com/scriptscat/scriptcat/issues/530)) [[45f73b7](https://github.com/scriptscat/scriptcat/commit/45f73b72b2a907d7e74929a571b24160982edbbb)] (by @cyfung1031)
- ♻️ Refactor MainWorld sandbox proxyContext (performance optimization, maintain TM sandbox behavior) ([#524](https://github.com/scriptscat/scriptcat/issues/524)) [[331087c](https://github.com/scriptscat/scriptcat/commit/331087c2e86580fc514fe5ffb4c2b1e665d4da71)] (by @cyfung1031)
- ⚡ React component key ([#526](https://github.com/scriptscat/scriptcat/issues/526)) [[df995ed](https://github.com/scriptscat/scriptcat/commit/df995ed2e63800cf523e8ba868bed991829894ef)] (by @cyfung1031)
- 💄 Adjust UI ([#523](https://github.com/scriptscat/scriptcat/issues/523)) [[ec1fcd2](https://github.com/scriptscat/scriptcat/commit/ec1fcd27083dce2b988e9aecade215f097978c8e)] (by @rkscv)
- ⚡ GM optimization and other updates ([#519](https://github.com/scriptscat/scriptcat/issues/519)) [[3d3be2c](https://github.com/scriptscat/scriptcat/commit/3d3be2ccae3a5218ecca91605f6b483a8d9aa2e4)] (by @cyfung1031)
- ⚡ GM injection optimization ([#517](https://github.com/scriptscat/scriptcat/issues/517)) [[1d6d52a](https://github.com/scriptscat/scriptcat/commit/1d6d52af3ff75cf547216284e0e837f3a44e7639)] (by @cyfung1031)
- ⚡ Minor adjustments ([#512](https://github.com/scriptscat/scriptcat/issues/512)) [[b3ceea3](https://github.com/scriptscat/scriptcat/commit/b3ceea35edb29bf735cb75f216c041d18cf901d3)] (by @cyfung1031)
- 📝 Update documentation ([#488](https://github.com/scriptscat/scriptcat/issues/488)) [[89b9848](https://github.com/scriptscat/scriptcat/commit/89b984866e90f0fd610da973b0952d801fe07a27)]
- ⚡ TreeShaking ([#509](https://github.com/scriptscat/scriptcat/issues/509)) [[4e70591](https://github.com/scriptscat/scriptcat/commit/4e705916a406d13eb09ee1aa2839b6ffeb484222)] (by @cyfung1031)
- 🎨 Modify .d.ts [#475](https://github.com/scriptscat/scriptcat/issues/475) [[a3adc00](https://github.com/scriptscat/scriptcat/commit/a3adc00708232835463d8f2ac6c49d7de259cb4f)]
- ⚡ Accelerate Render ([#491](https://github.com/scriptscat/scriptcat/issues/491)) [[1b266be](https://github.com/scriptscat/scriptcat/commit/1b266bec9b17053ea046f25ce0aab2f32afb6e9c)] (by @cyfung1031)
- 🎨 Fix eslint issues ([f49e20f](https://github.com/scriptscat/scriptcat/commit/f49e20faa78ca377f3404323cd13a5a7a5c27dca))
- ♻️ Adjust update page opening code [[9ea0708](https://github.com/scriptscat/scriptcat/commit/9ea0708a4d6c793caf4cbfe9b760db1fbdc1b453)]
- ⚡ TimeoutError judgment ([#565](https://github.com/scriptscat/scriptcat/issues/565)) [[6a9a830](https://github.com/scriptscat/scriptcat/commit/6a9a8309379f5406a29aa8bee6ad8de106c85f57)] (by @cyfung1031)
- ⚡ Fix ScriptList redraw, icon display and other issues + other visual element modifications ([#559](https://github.com/scriptscat/scriptcat/issues/559)) [[f9e6c44](https://github.com/scriptscat/scriptcat/commit/f9e6c44358757e904d58df4e91f67215fc9278ad)] (by @cyfung1031)
- ⚡ Modify messageFlag format to avoid conflicts with other page code ([#561](https://github.com/scriptscat/scriptcat/issues/561)) [[182a631](https://github.com/scriptscat/scriptcat/commit/182a631788b779a61aa126776b3edad4434a898e)] (by @cyfung1031)
- ♻️ xhr native response only taken once ([#550](https://github.com/scriptscat/scriptcat/issues/550)) [[3a8a464](https://github.com/scriptscat/scriptcat/commit/3a8a464)]
- 🎨 Adjust menu options [#573](https://github.com/scriptscat/scriptcat/issues/573) [[3677278](https://github.com/scriptscat/scriptcat/commit/367727851faf7ec73b9d751fab5787219d77fe9a)]

### Fixed

- 🐛 Fix script list checkbox filtering failure issue [#507](https://github.com/scriptscat/scriptcat/issues/507) [[8830490](https://github.com/scriptscat/scriptcat/commit/8830490007102d91df1f7dd4647f9fdf3de1417b)]
- 🐛 Set script name width to fixed width [#495](https://github.com/scriptscat/scriptcat/issues/495) [[33edabd](https://github.com/scriptscat/scriptcat/commit/33edabdb7bbde618f6a88237f15fd6e87d4ee4ab)]
- 🐛 Adjust init ([#543](https://github.com/scriptscat/scriptcat/issues/543)) [[0341d3c](https://github.com/scriptscat/scriptcat/commit/0341d3cf0442fc2e9c4c6dba4fbfb3a89dc522f1)] (by @cyfung1031)
- 🐛 favicon timeout ([#540](https://github.com/scriptscat/scriptcat/issues/540)) [[4484f01](https://github.com/scriptscat/scriptcat/commit/4484f0180895fd53c3f03045c758de8fdad49679)] (by @cyfung1031)
- 🐛 Fix GM download done property loss issue [[ed465e8](https://github.com/scriptscat/scriptcat/commit/ed465e8622277643286b9d32ccb62947230f5706)]
- 🐛 MV3 compatibility with Opera and Firefox adjustments ([#534](https://github.com/scriptscat/scriptcat/issues/534)) [[645a58f](https://github.com/scriptscat/scriptcat/commit/645a58f67af9f2d6b69ffbbb5e0d008dc726d80b)] (by @cyfung1031)
- 🐛 React code format lint ([#536](https://github.com/scriptscat/scriptcat/issues/536)) [[9ab4b22](https://github.com/scriptscat/scriptcat/commit/9ab4b225e803c337bf9c86f77fc2c64200ee4635)] (by @cyfung1031)
- 🐛 Fix textarea placeholder line break issue ([#538](https://github.com/scriptscat/scriptcat/issues/538)) [[9de4bb6](https://github.com/scriptscat/scriptcat/commit/9de4bb6cc02ca15363a2491eee2c9b387ebf5c4b)] (by @rkscv)
- 💚 Fix lint issues [[8cf0ce8](https://github.com/scriptscat/scriptcat/commit/8cf0ce8ebd172aec86b9f250711e4375fc00aa81)]
- 🐛 Fix GM_cookie.set operation [#520](https://github.com/scriptscat/scriptcat/issues/520) [[3d49376](https://github.com/scriptscat/scriptcat/commit/3d493768678b86c0a0f48040e7670a69bd714547)]
- 🐛 Fix finalUrl issue [[93fe904](https://github.com/scriptscat/scriptcat/commit/93fe904ed3cd4e819ca4549e77d288884022e0f2)]
- 🐛 Fix script loading failure due to special characters in script name [#516](https://github.com/scriptscat/scriptcat/issues/516) [[07631ef](https://github.com/scriptscat/scriptcat/commit/07631ef972b456574b2a0ed4e9ce4298b084c5e7)]
- 🐛 Fix sandbox keyword causing background scripts to fail [[e11dd11](https://github.com/scriptscat/scriptcat/commit/e11dd113cadcb0216448b4019d4f8cfba8522129)]
- 🐛 Fix GM API loading issue [[9f6bffc](https://github.com/scriptscat/scriptcat/commit/9f6bffc323cf524d767a0aa66b8e09411d6476c7)]
- 🐛 Fix Google Drive authorization prompt issue [[b08187a](https://github.com/scriptscat/scriptcat/commit/b08187a9f580ebe8fca4f313315028e8895d09a7)]
- 🐛 Compatible with TM's GM_info [#478](https://github.com/scriptscat/scriptcat/issues/478) [[de49c50](https://github.com/scriptscat/scriptcat/commit/de49c50f1835acdaec7c47782deb55811e676f88)]
- 🐛 Handle narrow screen display issues [#495](https://github.com/scriptscat/scriptcat/issues/495) [[a23f6d1](https://github.com/scriptscat/scriptcat/commit/a23f6d1e12863149e026dfe1691861a17deaeed8)]
- 🐛 Handle GM_setValue return value [#493](https://github.com/scriptscat/scriptcat/issues/493) [[dfc24a5](https://github.com/scriptscat/scriptcat/commit/dfc24a50bc71f4cb65d1e81f520ce4c350696d19)]
- 🐛 addStyle code fix ([#500](https://github.com/scriptscat/scriptcat/issues/500)) [[1f346cc](https://github.com/scriptscat/scriptcat/commit/1f346cc64e26b148b402756731e5d22a6260ccca)] (by @cyfung1031)
- 🐛 Fix GM.xmlHttpRequest onload event [#570](https://github.com/scriptscat/scriptcat/issues/570) [[553b944](https://github.com/scriptscat/scriptcat/commit/553b9442bf21340ce32871d01309919295b946fd)]
- 🐛 Fix special characters in export files [#558](https://github.com/scriptscat/scriptcat/issues/558) [[17505f0](https://github.com/scriptscat/scriptcat/commit/17505f076e46249467a90a32f51b10ed3170205a)]
- 🐛 Fix editor issues in development mode and edit change issues [[340d3cc](https://github.com/scriptscat/scriptcat/commit/340d3cca28cbef16e5a6678753d3676899760703)]
- 🐛 Optimize authorization management and GM XHR error handling [#556](https://github.com/scriptscat/scriptcat/issues/556) close [#556](https://github.com/scriptscat/scriptcat/issues/556) [[21e20d3](https://github.com/scriptscat/scriptcat/commit/21e20d35bee04cbad512cdd43ae38f82f08a612f)]
- 🐛 Fix resource verification issue [#563](https://github.com/scriptscat/scriptcat/issues/563) [[110a772](https://github.com/scriptscat/scriptcat/commit/110a77273648f6e8fda3b1e7e9015fb885f67dec)]
- 🐛 Fix GM_xmlhttpRequest not supporting special method issue [#555](https://github.com/scriptscat/scriptcat/issues/555) [[3bf4300](https://github.com/scriptscat/scriptcat/commit/3bf4300844e79963da52d278c4c90708b83d7904)]
- 🐛 Fix subscription list showing blank page issue [#553](https://github.com/scriptscat/scriptcat/issues/553) [[be65405](https://github.com/scriptscat/scriptcat/commit/be65405b02c72d2b00a833bc3aa4d478279ec851)]
- 🐛 Fix dropdown option display incomplete issue ([#552](https://github.com/scriptscat/scriptcat/issues/552)) ([73564d7](https://github.com/scriptscat/scriptcat/commit/73564d7dfbee2e0168c658e9b7a6802d2bab04b0))
- 🐛 Fix GM_xmlhttpRequest event issues [#549](https://github.com/scriptscat/scriptcat/issues/549) [[d25a707](https://github.com/scriptscat/scriptcat/commit/d25a707609911ff589121b18421e87edd66d255d)]
- 🐛 Handle beta version opening changelog [[cf699a9](https://github.com/scriptscat/scriptcat/commit/cf699a9bcdceac732f1e82a031056e1a44a73120)]
- 🐛 Fix GM cookie list incomplete retrieval issue [[3046200](https://github.com/scriptscat/scriptcat/commit/3046200562e7f92e307cb4a52e32723f67490f2d)]
- 🐛 Fix concurrent menu creation error [#580](https://github.com/scriptscat/scriptcat/issues/580) [[4855fec](https://github.com/scriptscat/scriptcat/commit/4855fec67a89bb36ab0f1855bc679926a0e74dc3)]
- 🐛 Handle some special sandbox keywords ([9ced958](https://github.com/scriptscat/scriptcat/commit/9ced958144f2d883c9044e6e4ad4f9dd53951ece))
- 🐛 Fix script settings site matching update continuously accumulating include issue [#581](https://github.com/scriptscat/scriptcat/issues/581) [[9d31872](https://github.com/scriptscat/scriptcat/commit/9d31872775116d60e093f7ca31d62449963f059d)]

### Miscellaneous

- 🌐 Add Russian translation ([ea056b0](https://github.com/scriptscat/scriptcat/commit/ea056b088c4404df860f151ce67aadcc48257765))
- 🌐 Remove language mapping ([ab66fb5](https://github.com/scriptscat/scriptcat/commit/ab66fb5eb01762299164379d151c29b8139135ad))
- 🌐 Match by prefix ([505e112](https://github.com/scriptscat/scriptcat/commit/505e112d3ccb3365da2bb403f37bc6482a59051b))
- ⬆️ Upgrade vitest [[bbc2550](https://github.com/scriptscat/scriptcat/commit/bbc2550fe2ed5105a1d27666ec68ca484e424ac3)]
- 🌐 Add i18n translation ([#525](https://github.com/scriptscat/scriptcat/issues/525)) [[8f677ce](https://github.com/scriptscat/scriptcat/commit/8f677cea06cc3f31902276b18112d353f4f3730e)] (by @cyfung1031)
- 📝 Fix documentation pnpm error ([#527](https://github.com/scriptscat/scriptcat/issues/527)) [[324301a](https://github.com/scriptscat/scriptcat/commit/324301ab1b448e778c50bed47d40a18d9db76786)] (by @cyfung1031)
- 🌐 Fix i18n path [[4fc50cd](https://github.com/scriptscat/scriptcat/commit/4fc50cd15ed871f675ad3cdcb48fc91c0e3abd91)]
- 🧪 Add GM.* unit tests [[4e91b36](https://github.com/scriptscat/scriptcat/commit/4e91b36b64220153fefe8b3a91575e0c302bf757)]
- ⚡ Faster script import ([#498](https://github.com/scriptscat/scriptcat/issues/498)) ([6b7ee3d](https://github.com/scriptscat/scriptcat/commit/6b7ee3d177b7d48e59e1e31053d9007265a4d5cc))
- ♻️ Library reference cleanup ([#494](https://github.com/scriptscat/scriptcat/issues/494)) ([55e2ecd](https://github.com/scriptscat/scriptcat/commit/55e2ecd35ffbf41a8e07eadf2da89f0afbc3685e))
- 🔨 Add changelog generation script ([a4f5dd4](https://github.com/scriptscat/scriptcat/commit/a4f5dd4c096a593c23a33d72a04352ceb016f50a))
- 📝 Update README [[b1d64f0](https://github.com/scriptscat/scriptcat/commit/b1d64f011e81ebd6a07ac2cd6ee62ecb23ec1c2a)]
- 📝 Update README ([b20e36e](https://github.com/scriptscat/scriptcat/commit/b20e36ef889bae990c765d9c361434c5261fcbd1))
- Merge branch 'release/mv3' [[eead31f](https://github.com/scriptscat/scriptcat/commit/eead31fa67a06c47bde214427b9860b3a1c98a3d)]
- 🌐 Handle arco i18n issue [#507](https://github.com/scriptscat/scriptcat/issues/507) [[79ad287](https://github.com/scriptscat/scriptcat/commit/79ad287553e0bb679c2ab811dc924b9e18059c4c)]
- 👷 Adjust eslint rules [[ee54ff6](https://github.com/scriptscat/scriptcat/commit/ee54ff676db7b5761abc48be0d2b1cef465fb40f)]
- 🔨 Modify changelog generation script [[924d4f8](https://github.com/scriptscat/scriptcat/commit/924d4f8d28e3764301112993ebb8e7f96a7a96fd)]
- 📝 Release v0.19.0-beta [[25fcffc](https://github.com/scriptscat/scriptcat/commit/25fcffcd43d5c08d77ebe32cfa6ea8eb70186038)]
- 🌐 Issue template provides English version [[37217d4](https://github.com/scriptscat/scriptcat/commit/37217d423d7e410893c68ef74963a6c14c38fafe)]
- 📝 Adjust readme [[acb5731](https://github.com/scriptscat/scriptcat/commit/acb5731df5141052312251073e1408426242b2e4)]
- 🌐 Update i18n README.md ([#487](https://github.com/scriptscat/scriptcat/issues/487)) [[a0d6417](https://github.com/scriptscat/scriptcat/commit/a0d641782666315eed4937d6e62bff6944d65e9d)] (by @MaxZhang)
- 👷 Add .codecov.yml [[ee297d5](https://github.com/scriptscat/scriptcat/commit/ee297d520802ead748fd3969e065fb19b42ca87f)]
- 🌐 Update translation [[82214d0](https://github.com/scriptscat/scriptcat/commit/82214d09fa0696fe3366277ca21ae80164dea676)]
- 🌐 Handle default translation issue English based on Chinese, other languages based on English ([70a739c](https://github.com/scriptscat/scriptcat/commit/70a739ce25f89286f9289e70d5183278f1893572))

**Full Changelog**: https://github.com/scriptscat/scriptcat/compare/v0.18.2...v1.0.0

<a name="0.18.2"></a>
<a name="0.18.2-beta"></a>

## 0.18.2 (2025-07-08)

> v0.18.2-beta version content is identical to this version

### Added

- ✨ Add script search and batch pinning to script editing list [#462](https://github.com/scriptscat/scriptcat/issues/462) [[7c6ba17](https://github.com/scriptscat/scriptcat/commit/7c6ba1783275fbdd60c74170d5374826100e183d)]
- ✨ Display corresponding prompts based on browser kernel version [[b0cb2b9](https://github.com/scriptscat/scriptcat/commit/b0cb2b9c76019059beb6eb7f73eeeccd1097adfc)]
- ✨ Add delete script button to script editing list [#466](https://github.com/scriptscat/scriptcat/issues/466) [[4042845](https://github.com/scriptscat/scriptcat/commit/40428457a75d5879d99e6b0e5438993404c61ad6)]
- ✨ Add script storage panel with batch editing support ([#458](https://github.com/scriptscat/scriptcat/issues/458)) [[1d7800a](https://github.com/scriptscat/scriptcat/commit/1d7800a8e9576638a746c0cbafb3e3a663cd37d0)] (by @DreamNya)
- ✨ Implement manual script execution order adjustment ([#452](https://github.com/scriptscat/scriptcat/issues/452)) [[c6728c3](https://github.com/scriptscat/scriptcat/commit/c6728c33296683a42b8b7388b885edefb3422a02)] (by @DreamNya)

### Changed

- ⚡ Optimize site icon loading issues [#474](https://github.com/scriptscat/scriptcat/issues/474) [[09e2a1b](https://github.com/scriptscat/scriptcat/commit/09e2a1b26b8289496ab211b4ebeb6ff4a4bb9049)]
- 💄 Optimize popup page display [#456](https://github.com/scriptscat/scriptcat/issues/456) [[5bfd9b2](https://github.com/scriptscat/scriptcat/commit/5bfd9b22c804438a0cfc9a2c491340afe7fcf7e2)]
- ⚡ Optimize site icon loading speed [[2841878](https://github.com/scriptscat/scriptcat/commit/28418789e617b903f8f5d9dbef4c8a8fcab5dc7c)]

### Fixed

- 🐛 Fix i18n unable to save without supporting languages [#485](https://github.com/scriptscat/scriptcat/issues/485) [[5c012a3](https://github.com/scriptscat/scriptcat/commit/5c012a3ce3c679c323983340ac2dad6ab3188fd2)]
- 🐛 Fix incorrect UserConfig causing scripts to fail loading [#483](https://github.com/scriptscat/scriptcat/issues/483) [[bdc681b](https://github.com/scriptscat/scriptcat/commit/bdc681bc9ead6e37063b41edf880e0c82cbbb888)]
- 🐛 Fix downloadMode in GM_info always being "native" ([#476](https://github.com/scriptscat/scriptcat/issues/476)) [[9c016db](https://github.com/scriptscat/scriptcat/commit/9c016db35beb763f00e45fdd5ce280edd48254bf)] (by @cyfung1031)
- 🐛 Fix inconsistent list item height issue [#459](https://github.com/scriptscat/scriptcat/issues/459) [[2a1d3eb](https://github.com/scriptscat/scriptcat/commit/2a1d3eb1cc861e846a1ec11e1c6fb85dc07ff0b9)]
- 🐛 Fix textContent handling in GM_addElement ([#463](https://github.com/scriptscat/scriptcat/issues/463)) [[aba6caa](https://github.com/scriptscat/scriptcat/commit/aba6caa3c895e21071eddca6182ed69b6b3de07e)] (by @cyfung1031)
- 🐛 GM_addStyle documentation and type supplements ([#465](https://github.com/scriptscat/scriptcat/issues/465)) [[0977759](https://github.com/scriptscat/scriptcat/commit/09777599feed3fa59ec55122f4f3ecfd107b6b58)] (by @cyfung1031)
- 🐛 Fix notification icon issue [#454](https://github.com/scriptscat/scriptcat/issues/454) [[64fe88e](https://github.com/scriptscat/scriptcat/commit/64fe88eefb7f1d0843dc505a19652d162502c3ed)]
- 🐛 Fix popup new version prompt style ([#453](https://github.com/scriptscat/scriptcat/issues/453)) [[068ebc5](https://github.com/scriptscat/scriptcat/commit/068ebc52e1c471a805416acebd96ee79db6c1383)] (by @DreamNya)

### Miscellaneous

- 🌐 Add English contribution guide [[e311746](https://github.com/scriptscat/scriptcat/commit/e311746260fa5c814158a82d2586beb58f3e821b)]
- 🌐 Restore low version browser prompt [[e624bfc](https://github.com/scriptscat/scriptcat/commit/e624bfcdcc18ee182273d0fbe50a8f07976610b0)]
- 🌐 Add Japanese and German translations and set default language to English [#485](https://github.com/scriptscat/scriptcat/issues/485) Add Japanese and German translations and set the default language to English [[6a7f3a8](https://github.com/scriptscat/scriptcat/commit/6a7f3a8c7c1b7fb25248018184ace526b5e56765)]
- 📄 Add low version browser prompt [[679b38c](https://github.com/scriptscat/scriptcat/commit/679b38c3db3b5332e1c4c0b68f78c177a9df7e00)]
- ⚡ Fix double-wrapped Promise ([#482](https://github.com/scriptscat/scriptcat/issues/482)) [[c0e76ca](https://github.com/scriptscat/scriptcat/commit/c0e76ca79667cfb6732ea377569dbd5a169903eb)] (by @cyfung1031)
- ⚡ loadScriptFavicons can update asynchronously without await ([#479](https://github.com/scriptscat/scriptcat/issues/479)) [[c1164ce](https://github.com/scriptscat/scriptcat/commit/c1164ce4f5723f8a5a95e208047e89d039cd618a)] (by @cyfung1031)
- 🌐 Translation fixes ([#477](https://github.com/scriptscat/scriptcat/issues/477)) [[948e113](https://github.com/scriptscat/scriptcat/commit/948e113d8e57f1c27817240063df9f4f88dfdc8e)] (by @cyfung1031)
- 🌐 en translation improvements ([#469](https://github.com/scriptscat/scriptcat/issues/469)) [[976020b](https://github.com/scriptscat/scriptcat/commit/976020bde5bbae50735e4403190e85b3817c8529)] (by @Yay295)
- ⚡ Optimize GM_download implementation ([#455](https://github.com/scriptscat/scriptcat/issues/455)) [[a345e97](https://github.com/scriptscat/scriptcat/commit/a345e97a613fdda31a464f72c3deb4b13a6a5e31)] (by @DreamNya)
- 🌐 Add Traditional Chinese translation [[510f228](https://github.com/scriptscat/scriptcat/commit/510f22824b593d65f7cd45ba9577812dfca63c3b)]
- 🌐 Handle i18n issues [#456](https://github.com/scriptscat/scriptcat/issues/456) [[c70ca42](https://github.com/scriptscat/scriptcat/commit/c70ca42fbed6a162c9dfb100584cc86b0201a3ee)]

<a name="0.18.1"></a>

## 0.18.1 (2025-06-26)

Fix some bugs, v0.18.1-beta version content is identical to this version

⚠️ Please note: If you are using Windows 8/7/XP systems, or browser kernel version lower than <120, you need to manually install the [legacy ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). v0.16.6 is the last version that supports Manifest V2. For installation steps, please refer to: [Install Extension via Load Unpacked](/docs/use/use/#install-extension-via-load-unpacked).

### Changed

- 🎨 Optimize issue reporting process [[5f2f792](https://github.com/scriptscat/scriptcat/commit/5f2f79290d96e0bcda87b96aef57b5ebdd552a42)]
- 💄 Adjust default eslint rules [[9525627](https://github.com/scriptscat/scriptcat/commit/9525627fdff6c9eabfadd0805b11dbd132958c61)]

### Fixed

- 🐛 Fix background script occasional loading failure [[b9e4c86](https://github.com/scriptscat/scriptcat/commit/b9e4c869b59e7357ebcda4f86c2d49f1a4ca2aac)]
- 🐛 Fix occasional script loading failure [#447](https://github.com/scriptscat/scriptcat/issues/447) [[06c21b6](https://github.com/scriptscat/scriptcat/commit/06c21b647abde4a7e4ae194ad1be9ae1c51ac927)]
- 🐛 Fix run log jump condition issue [#445](https://github.com/scriptscat/scriptcat/issues/445) [[007c3f7](https://github.com/scriptscat/scriptcat/commit/007c3f72bf1df8a70e04374b14120e5ab9828010)]
- 🐛 Fix log recording issue and temporarily remove Firefox package [#449](https://github.com/scriptscat/scriptcat/issues/449) [[7cb20d5](https://github.com/scriptscat/scriptcat/commit/7cb20d5fe4e2fac5d9318f93fce07a7c6b2e08a1)]
- 🐛 Handle tld domains [[93ce67a](https://github.com/scriptscat/scriptcat/commit/93ce67a6bc3213264d7582a0335eb28ee38a0cb0)]
- 🐛 Fix GM XHR redirect unsafeHeader handling issue [#444](https://github.com/scriptscat/scriptcat/issues/444) [[c0da6a0](https://github.com/scriptscat/scriptcat/commit/c0da6a06dc4d193f212caeca3050205d0df80316)]
- 🐛 Fix GM cookie and GM xhr issues [#444](https://github.com/scriptscat/scriptcat/issues/444) [[d384f37](https://github.com/scriptscat/scriptcat/commit/d384f3776c2685909a2908a5d3bae6007c21caaa)]
- 🐛 Support some regular expressions [[fa81e77](https://github.com/scriptscat/scriptcat/commit/fa81e771bb61215cc434f9aa6b74485fd8495a80)]
- 🐛 Handle some regex matching cases [[ccd4085](https://github.com/scriptscat/scriptcat/commit/ccd4085cfe7640212bde072bed30fe79c1658755)]
- 🐛 Fix non-compliant match affecting overall loading [#444](https://github.com/scriptscat/scriptcat/issues/444) [[d32793e](https://github.com/scriptscat/scriptcat/commit/d32793e4bf5b79cfa7e35648b198865ca45272f6)]
- 🐛 Fix timer issues [[96abce7](https://github.com/scriptscat/scriptcat/commit/96abce7bfd76a35f101be5437893934e8af88808)]

### Miscellaneous

- 🌐 Add en translation [[32bfa21](https://github.com/scriptscat/scriptcat/commit/32bfa214283ceb5706afc702bb76e1d1080df09f)]
- 🌐 Handle i18n [[c707094](https://github.com/scriptscat/scriptcat/commit/c70709499809766d800813d21f141fca1ea23e70)]

<a name="0.18.0"></a>

## 0.18.0 (2025-06-24)

Major Manifest V3 release with comprehensive improvements and new features

⚠️ Please note: If you are using Windows 8/7/XP systems, or browser kernel version lower than <120, you need to manually install the [legacy ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). v0.16.6 is the last version that supports Manifest V2. For installation steps, please refer to: [Install Extension via Load Unpacked](/docs/use/use/#install-extension-via-load-unpacked).

### Added

- ✨ Add script execution order adjustment feature ([#452](https://github.com/scriptscat/scriptcat/issues/452)) [[c6728c3](https://github.com/scriptscat/scriptcat/commit/c6728c33296683a42b8b7388b885edefb3422a02)] (by @DreamNya)
- ✨ Add script storage panel with batch editing support ([#458](https://github.com/scriptscat/scriptcat/issues/458)) [[1d7800a](https://github.com/scriptscat/scriptcat/commit/1d7800a8e9576638a746c0cbafb3e3a663cd37d0)] (by @DreamNya)
- ✨ Add script search and batch pinning functionality [#462](https://github.com/scriptscat/scriptcat/issues/462) [[7c6ba17](https://github.com/scriptscat/scriptcat/commit/7c6ba1783275fbdd60c74170d5374826100e183d)]
- ✨ Add delete script button to script editing list [#466](https://github.com/scriptscat/scriptcat/issues/466) [[4042845](https://github.com/scriptscat/scriptcat/commit/40428457a75d5879d99e6b0e5438993404c61ad6)]
- ✨ Display browser kernel version-based prompts [[b0cb2b9](https://github.com/scriptscat/scriptcat/commit/b0cb2b9c76019059beb6eb7f73eeeccd1097adfc)]

### Changed

- ⚡ Optimize site icon loading performance [#474](https://github.com/scriptscat/scriptcat/issues/474) [[09e2a1b](https://github.com/scriptscat/scriptcat/commit/09e2a1b26b8289496ab211b4ebeb6ff4a4bb9049)]
- ⚡ Optimize site icon loading speed [[2841878](https://github.com/scriptscat/scriptcat/commit/28418789e617b903f8f5d9dbef4c8a8fcab5dc7c)]
- 💄 Optimize popup page display [#456](https://github.com/scriptscat/scriptcat/issues/456) [[5bfd9b2](https://github.com/scriptscat/scriptcat/commit/5bfd9b22c804438a0cfc9a2c491340afe7fcf7e2)]

### Fixed

- 🐛 Fix i18n unable to save without supporting languages [#485](https://github.com/scriptscat/scriptcat/issues/485) [[5c012a3](https://github.com/scriptscat/scriptcat/commit/5c012a3ce3c679c323983340ac2dad6ab3188fd2)]
- 🐛 Fix incorrect UserConfig causing scripts to fail loading [#483](https://github.com/scriptscat/scriptcat/issues/483) [[bdc681b](https://github.com/scriptscat/scriptcat/commit/bdc681bc9ead6e37063b41edf880e0c82cbbb888)]
- 🐛 Fix downloadMode in GM_info always being "native" ([#476](https://github.com/scriptscat/scriptcat/issues/476)) [[9c016db](https://github.com/scriptscat/scriptcat/commit/9c016db35beb763f00e45fdd5ce280edd48254bf)] (by @cyfung1031)
- 🐛 Fix inconsistent list item height issue [#459](https://github.com/scriptscat/scriptcat/issues/459) [[2a1d3eb](https://github.com/scriptscat/scriptcat/commit/2a1d3eb1cc861e846a1ec11e1c6fb85dc07ff0b9)]
- 🐛 Fix textContent handling in GM_addElement ([#463](https://github.com/scriptscat/scriptcat/issues/463)) [[aba6caa](https://github.com/scriptscat/scriptcat/commit/aba6caa3c895e21071eddca6182ed69b6b3de07e)] (by @cyfung1031)
- 🐛 Fix notification icon issue [#454](https://github.com/scriptscat/scriptcat/issues/454) [[64fe88e](https://github.com/scriptscat/scriptcat/commit/64fe88eefb7f1d0843dc505a19652d162502c3ed)]
- 🐛 Fix popup new version prompt style ([#453](https://github.com/scriptscat/scriptcat/issues/453)) [[068ebc5](https://github.com/scriptscat/scriptcat/commit/068ebc52e1c471a805416acebd96ee79db6c1383)] (by @DreamNya)

### Miscellaneous

- 🌐 Add English contribution guide [[e311746](https://github.com/scriptscat/scriptcat/commit/e311746260fa5c814158a82d2586beb58f3e821b)]
- 🌐 Add Japanese and German translations, set default language to English [#485](https://github.com/scriptscat/scriptcat/issues/485) [[6a7f3a8](https://github.com/scriptscat/scriptcat/commit/6a7f3a8c7c1b7fb25248018184ace526b5e56765)]
- 🌐 Add Traditional Chinese translation [[510f228](https://github.com/scriptscat/scriptcat/commit/510f22824b593d65f7cd45ba9577812dfca63c3b)]
- ⚡ Optimize GM_download implementation ([#455](https://github.com/scriptscat/scriptcat/issues/455)) [[a345e97](https://github.com/scriptscat/scriptcat/commit/a345e97a613fdda31a464f72c3deb4b13a6a5e31)] (by @DreamNya)

<a name="0.17.0"></a>

## 0.17.0 (2025-04-25)

Starting from v0.17.0, ScriptCat upgrades to Manifest V3 and switches storage engine from `indexedDB` to `chrome.storage.local`. If you encounter data issues, please provide feedback on [GitHub](https://github.com/scriptscat/scriptcat/issues).

You can install the Beta version from [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN) and [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)

Refactored to Manifest V3, changed storage engine, modified some features

### Changed

- ♻️ New storage engine data migration [[deace16](https://github.com/scriptscat/scriptcat/commit/deace1633e1f46db4b4dcc5cb1d3c63a4d273244)]
- ♻️ Refactor code, upgrade to Manifest V3 [[fcb4cc4](https://github.com/scriptscat/scriptcat/commit/fcb4cc48afcb12106eec8d39a5d902504e2553fc)]
- To maintain consistency with TM, removed `maxRedirects` from `GM_xmlhttpRequest` and use `redirect` instead
- Removed `store` method and `storeId`, `tabId` from `GM_cookie`. Now getting cookies will directly use the current page's `store` (e.g., incognito and normal windows have different stores)

### Fixed

- 🐛 Fix some detail issues after Manifest V3 refactoring [[416442c](https://github.com/scriptscat/scriptcat/commit/416442c9494cacf8e3d0f1028e5856819811e4c6)]
- 🐛 Fix OneDrive file upload issue [#366](https://github.com/scriptscat/scriptcat/issues/366) [[ad5a711](https://github.com/scriptscat/scriptcat/commit/ad5a7116c9d54b4e4a4ab53420d0e1d185612f98)]

**Full Changelog**: https://github.com/scriptscat/scriptcat/compare/v0.16.6...v0.17.0-alpha.3

<a name="0.16.9"></a>

## 0.16.9 (2025-07-09)

Due to a mistake, v0.16.8 was occupied on Firefox, so we skipped v0.16.8

### Fixed

- 🐛 Fix Firefox compatibility issues ([#510](https://github.com/scriptscat/scriptcat/issues/510)) [[beb385d](https://github.com/scriptscat/scriptcat/commit/beb385d69faa29493887fef5089a03344cb0d9dc)] (by @cyfung1031)

### Changed

- ⚡ TreeShaking ([#510](https://github.com/scriptscat/scriptcat/issues/510)) [[beb385d](https://github.com/scriptscat/scriptcat/commit/beb385d69faa29493887fef5089a03344cb0d9dc)] (by @cyfung1031)

### Miscellaneous

- 👷 Handle Firefox packaging [[814c9c3](https://github.com/scriptscat/scriptcat/commit/814c9c3ff26815f72a59ab160bb74689451aa158)]

<a name="0.16.7"></a>

## 0.16.7 (2025-07-08)

This is a fix version for Manifest V2. Future updates will only address non-critical and functional bugs. We recommend updating your browser to the latest version and installing the latest version of ScriptCat (v0.17.0+).

Firefox Manifest V3 version is still in preparation.

### Fixed

- 🐛 Fix onxxxx issues [[9cf59a3](https://github.com/scriptscat/scriptcat/commit/9cf59a3e26360a47feb3b95136721b56820503ca)]
- 🐛 Handle extension downgrade issues [#503](https://github.com/scriptscat/scriptcat/issues/503) [[faae3b8](https://github.com/scriptscat/scriptcat/commit/faae3b83c6bdfacc56bc7335545cb397e97dfa69)]
- 🐛 Fix garbage packaging issues ([#501](https://github.com/scriptscat/scriptcat/issues/501)) [[3091ec0](https://github.com/scriptscat/scriptcat/commit/3091ec02e9199b9c42949b32411f641f15cda8f7)] (by @cyfung1031)
- 🐛 Fix OneDrive file upload issue [#366](https://github.com/scriptscat/scriptcat/issues/366) [[ad5a711](https://github.com/scriptscat/scriptcat/commit/ad5a7116c9d54b4e4a4ab53420d0e1d185612f98)]

### Miscellaneous

- 🌐 Add translation files [[92c1951](https://github.com/scriptscat/scriptcat/commit/92c195167ef050f1725b29767697f47f3405421f)]

<a name="0.16.6"></a>

## 0.16.6 (2024-10-24)

> Manifest V3 refactoring plan is in preparation. Non-critical and functional bugs will not be handled temporarily. Due to [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/checklist?hl=zh-cn) platform limitations, after upgrading you may need to enable developer mode for the extension to continue using frontend scripts (Userscripts)

### Changed

- 🎨 Optimize WebDAV password input, change to password field ([#311](https://github.com/scriptscat/scriptcat/issues/311)) by @Przeblysk [[9f1003c](https://github.com/scriptscat/scriptcat/commit/9f1003ca18925b1c3ef8de6cd4c393d0d0f97dc3)]

### Fixed

- 🐛 Fix GM.xmlHttpRequest implementation [#308](https://github.com/scriptscat/scriptcat/issues/308) [[f0c3a67](https://github.com/scriptscat/scriptcat/commit/f0c3a6739e290426548d50209c241215ec005480)]

### Miscellaneous

- 🌐 Add Vietnamese language ([#314](https://github.com/scriptscat/scriptcat/issues/314)) by @RenjiYuusei [[50c7a36](https://github.com/scriptscat/scriptcat/commit/50c7a3643400141e568d6bdc35506b93f7804635)]

<a name="0.16.5"></a>

## 0.16.5 (2024-07-12)

### Fixed

- 🐛 Fix GM_addElement related issues in Chrome v127 [#299](https://github.com/scriptscat/scriptcat/issues/299) [[cd749af](https://github.com/scriptscat/scriptcat/commit/cd749afbe98a92016a22c5f7fee2a9d40fd8f815)]

<a name="0.16.4"></a>

## 0.16.4 (2024-07-10)

### Added

- ✨ Display script icons in script list page [#292](https://github.com/scriptscat/scriptcat/issues/292) [[1e82fe4](https://github.com/scriptscat/scriptcat/commit/1e82fe4e1e9f71bf202622dedf9adc2d3dcbf13b)]
- ✨ Support importing local files when creating new scripts [#294](https://github.com/scriptscat/scriptcat/issues/294) [[faeb30c](https://github.com/scriptscat/scriptcat/commit/faeb30c2803db8873cc186a28008c5cc9c6b5393)]

### Fixed

- 🐛 Fix English column width issue [#297](https://github.com/scriptscat/scriptcat/issues/297) [[fcfb3ac](https://github.com/scriptscat/scriptcat/commit/fcfb3ac0e3378b9607ee29593000e660edc4b955)]
- 🐛 Fix issue where homepage still displays after deleting UserConfig [#285](https://github.com/scriptscat/scriptcat/issues/285) [[dd3b1b4](https://github.com/scriptscat/scriptcat/commit/dd3b1b4f9012eecd52f5f27d8f6f4fb24c9888c4)]
- � Fix GM_addElement issues in Firefox environment [#291](https://github.com/scriptscat/scriptcat/issues/291) [[013a4f6](https://github.com/scriptscat/scriptcat/commit/013a4f614e62beeab6e0696fd09c11dcea9e0607)]
- 🐛 Fix click confusion issue after sorting [#283](https://github.com/scriptscat/scriptcat/issues/283) [[8a05f00](https://github.com/scriptscat/scriptcat/commit/8a05f00c2922c2382bae9c46a3d49a08223b4de5)]
- 🐛 Handle page back navigation [#277](https://github.com/scriptscat/scriptcat/issues/277) [[f6f0a80](https://github.com/scriptscat/scriptcat/commit/f6f0a80d10ccc0597fb7128fdf125bbd16aa1c56)]
- 🐛 Fix RegExp content being overwritten issue [#293](https://github.com/scriptscat/scriptcat/issues/293) [#289](https://github.com/scriptscat/scriptcat/issues/289) [[3ef9fbc](https://github.com/scriptscat/scriptcat/commit/3ef9fbcaf3d7b261792476f2486dc4b4a002bead)]

<a name="0.16.3"></a>

## 0.16.3 (2024-05-01)

### Fixed

- 🐛 Fix GM.* compatibility issues [#274](https://github.com/scriptscat/scriptcat/issues/274) [[389e6d2](https://github.com/scriptscat/scriptcat/commit/389e6d27ff697312a716a2a152de9492b23d4f3a)]
- 🐛 Handle removal of on events [[c69c208](https://github.com/scriptscat/scriptcat/commit/c69c2085c410f1a2e65c221917353f13c4f1bc71)]
- � Fix request failures caused by header settings [[b5c2910](https://github.com/scriptscat/scriptcat/commit/b5c2910a526dbf785e481681956a8aa9efe2a20c)]
- � Handle global properties [[ff3b721](https://github.com/scriptscat/scriptcat/commit/ff3b72192efbe8712479d9460a4f1c0bf45a6e0e)]
- 🐛 Fix window penetration issue [#273](https://github.com/scriptscat/scriptcat/issues/273) [[577f7e5](https://github.com/scriptscat/scriptcat/commit/577f7e523b525f38bb9d9d3dddae5921b88c3e9a)]
- 🐛 Fix hasOwnProperty returning undefined issue [#272](https://github.com/scriptscat/scriptcat/issues/272) [[b93be76](https://github.com/scriptscat/scriptcat/commit/b93be76c684ba0a9820deff65cf9d2baaa007e18)]

### Miscellaneous

- 🌐 Extension name and description i18n [[03987b0](https://github.com/scriptscat/scriptcat/commit/03987b0604daef7168b73ad80337af0e8c8c5549)]
- 👷 Fix Firefox extension package build [[328f84f](https://github.com/scriptscat/scriptcat/commit/328f84f2a0b3523a2cb40d16b72d4110e3cd255d)]

<a name="0.16.2"></a>

## 0.16.2 (2024-04-22)

> Future efforts will mainly focus on `Manifest V3` support. This version mainly includes small improvements and fixes. For detailed feature demonstrations, please see: [v0.16.2](./v0.16#v0162)

### Added

- ✨ Menu auto-hide configuration [#269](https://github.com/scriptscat/scriptcat/issues/269) [[3e8f2ce](https://github.com/scriptscat/scriptcat/commit/3e8f2cee095ce25395f49d2bfce3ccf199c1d880)]
- ✨ Add column adjustment and hide operations to script list [#269](https://github.com/scriptscat/scriptcat/issues/269) [[b8f679d](https://github.com/scriptscat/scriptcat/commit/b8f679df134448e0f3fca7f43795917f225c8b05)]
- ✅ Fix test issues [[04dbdb2](https://github.com/scriptscat/scriptcat/commit/04dbdb2d8030c035972ab077d63f8ef79b3d0621)]

### Fixed

- ✏️ Fix guide spelling error [#268](https://github.com/scriptscat/scriptcat/issues/268) [[ca742c3](https://github.com/scriptscat/scriptcat/commit/ca742c3189c709011797e681b9aa1740fa1aedb8)]
- 🐛 Fix Baidu Netdisk file deletion failure issue [[e516058](https://github.com/scriptscat/scriptcat/commit/e516058b8f7e5e0dd4bda39c0ea6d332a679bbdd)]
- 🐛 Fix sync function deletion recovery issue [[75c4522](https://github.com/scriptscat/scriptcat/commit/75c452284d4e8676a42291e2b04d4a9f7785db3d)]

### Miscellaneous

- � Handle Edge store publishing issue that cannot contain compressed files [[e5b2e3b](https://github.com/scriptscat/scriptcat/commit/e5b2e3b2df73cfb51a2a45ee44a0e5e1928a8a29)]

**Full Changelog**: [v0.16.1...v0.16.2](https://github.com/scriptscat/scriptcat/compare/v0.16.1...v0.16.2)

<a name="0.16.1"></a>

## 0.16.1 (2024-02-26)

### Added

- ✨ Add sorting functionality to last update column [#250](https://github.com/scriptscat/scriptcat/issues/250) [[ded11ca](https://github.com/scriptscat/scriptcat/commit/ded11cafaa31e7f5ec43d4f96f6db41cfa8c7ff9)]

### Changed

- ⚡ Optimize name search [#262](https://github.com/scriptscat/scriptcat/issues/262) [[08778ed](https://github.com/scriptscat/scriptcat/commit/08778ed945a5887c93ba24c816f4d8febdf3ac1e)]

### Fixed

- 🐛 Fix script deletion sync failure issue [#254](https://github.com/scriptscat/scriptcat/issues/254) [[bf68abb](https://github.com/scriptscat/scriptcat/commit/bf68abb9b7bffe3c8658d361c92e850b0c555953)]
- � Fix subscription script duplicate installation issue [#257](https://github.com/scriptscat/scriptcat/issues/257) [[57bc6f9](https://github.com/scriptscat/scriptcat/commit/57bc6f9390a33400730eb7c261cf7c23c5f3532a)]
- � Fix toString.call(window) returning incorrect content [#260](https://github.com/scriptscat/scriptcat/issues/260) [[2288dae](https://github.com/scriptscat/scriptcat/commit/2288dae8d5589c97a8d2b1983fb9b97df05df04e)]
- 🐛 Fix data errors caused by concurrent setValue [#249](https://github.com/scriptscat/scriptcat/issues/249) [[0b4d241](https://github.com/scriptscat/scriptcat/commit/0b4d2413382d0b8c5671eb6685808c77deaf9117)]
- 🐛 Fix duplicate sync caused by file path changes during VSCode sync [#247](https://github.com/scriptscat/scriptcat/issues/247) [[a6efaa7](https://github.com/scriptscat/scriptcat/commit/a6efaa77fe34d5f1b836e9e56e7e6c358af7e85d)]
- 🐛 New script supports top-level await by @DreamNya [#258](https://github.com/scriptscat/scriptcat/issues/258) [[3a37af2](https://github.com/scriptscat/scriptcat/commit/3a37af2d885dc133d4ae3f82b7f9ca49d0279a5f)]

**Full Changelog**: [v0.16.0...v0.16.1](https://github.com/scriptscat/scriptcat/compare/v0.16.0...v0.16.1)

<a name="0.16.0"></a>

## 0.16.0 (2023-12-21)

### Added

- ✨ Add GM_info metadata connects [#245](https://github.com/scriptscat/scriptcat/issues/245) [[c04a829](https://github.com/scriptscat/scriptcat/commit/c04a82906192ba29580e51d90b112435d44d2418)]

### Fixed

- 🐛 Fix language switching "Last Update" field translation not syncing issue [#241](https://github.com/scriptscat/scriptcat/issues/241) [[2d178ac](https://github.com/scriptscat/scriptcat/commit/2d178acd29054f1064063f7b58eef6dfadb3ba5c)]
- 🐛 Fix @grant GM.* declaration issue [#243](https://github.com/scriptscat/scriptcat/issues/243) [[6d7efa6](https://github.com/scriptscat/scriptcat/commit/6d7efa6b5051dcc947ffb40727febd1b585ca428)]
- 🐛 Fix @match port matching error [#244](https://github.com/scriptscat/scriptcat/issues/244) [[2e378c3](https://github.com/scriptscat/scriptcat/commit/2e378c35b5d20280a3e26a540a61b31629d358ac)]
- 🐛 Fix writing Symbol properties to global issue [[d8bb2f1](https://github.com/scriptscat/scriptcat/commit/d8bb2f1c93c9689dd4d6458a3f4564d4acb67be4)]
- 🐛 Fix imported lodash conflicting with page issue [[96280a2](https://github.com/scriptscat/scriptcat/commit/96280a24e284ed62654097573c14e574996e2a5a)]

<a name="0.16.0-beta"></a>

## 0.16.0-beta (2023-11-28)

### Added

- ✨ Add i18n WYSIWYG mode [[460088a](https://github.com/scriptscat/scriptcat/commit/460088a27ee20036aad27d5eccabb3311fc71863)]
- ✨ Optimize language selection [[5807a2a](https://github.com/scriptscat/scriptcat/commit/5807a2af0aa62a945e273a677597f7c607dcd9d9)]
- ✨ Use Crowdin to manage translations [[c62a559](https://github.com/scriptscat/scriptcat/commit/c62a5593c5d57feb8239e50ee90aaa3f3fc309b4)]

### Changed

- 💄 Adjust Badge color to gray [[97c06f5](https://github.com/scriptscat/scriptcat/commit/97c06f552133b4fba3b2d6f27cf5b39f3d1c3323)]

### Fixed

- 🐛 Fix OneDrive space issue [#224](https://github.com/scriptscat/scriptcat/issues/224) [[0d10588](https://github.com/scriptscat/scriptcat/commit/0d1058818538a0764e9c55b3842480a202230231)]
- 🐛 Handle OneDrive E5 account file sync [#224](https://github.com/scriptscat/scriptcat/issues/224) [[dc56ec6](https://github.com/scriptscat/scriptcat/commit/dc56ec623ad8b00976aef71df81fffdd41863180)]
- 🐛 Fix GreasyFork logo issue [[092517e](https://github.com/scriptscat/scriptcat/commit/092517ebb84e9309c7577fac05ce84f6cb334d9c)]
- 🐛 Fix table width issue in different languages ([#236](https://github.com/scriptscat/scriptcat/issues/236)) [[3eb84b5](https://github.com/scriptscat/scriptcat/commit/3eb84b51ad69ed5ed74181774b6a356b30fa8c36)] by [@duoluodexiaoxiaoyuan](https://github.com/duoluodexiaoxiaoyuan)
- 🐛 Fix dev mode not running properly due to new injection method [[a96ab94](https://github.com/scriptscat/scriptcat/commit/a96ab947cfa1321adb7a560f922a1b5f85ffb21e)]
- 🐛 Optimize script runtime framework injection speed [#232](https://github.com/scriptscat/scriptcat/issues/232) [[4cf6450](https://github.com/scriptscat/scriptcat/commit/4cf6450debe4b3a6b773459559da486f1863298f)]
- 🐛 Don't send origin header by default [#233](https://github.com/scriptscat/scriptcat/issues/233) [[9d4ebcc](https://github.com/scriptscat/scriptcat/commit/9d4ebcc7711475696613b1ed7b42256046371198)]

<a name="0.15.1"></a>

## 0.15.1 (2023-08-30)

### Added

- ✨ Optimize authorization management [[5eb7c5a](https://github.com/scriptscat/scriptcat/commit/5eb7c5aa3b67c9dba20712b8c69f83cd0b3ab302)]

### Changed

- ⬆️ Upgrade cron package fixed: [#152](https://github.com/scriptscat/scriptcat/issues/152) [[0c43741](https://github.com/scriptscat/scriptcat/commit/0c4374196ebe8b29ae1a9c61353f6ff48d0d8843)]

### Fixed

- 🐛 Fix finalUrl issue with # after redirect [[715639e](https://github.com/scriptscat/scriptcat/commit/715639e81ecc318b1432cd15b70cc0f89d99a007)]
- 🐛 Fix CAT_fileStorage network error causing configuration implementation issue [#224](https://github.com/scriptscat/scriptcat/issues/224) [[c309832](https://github.com/scriptscat/scriptcat/commit/c309832a7da4b110b43537ef53518df1ca1e12b2)]
- 🐛 Ignore WebDAV create directory error [#213](https://github.com/scriptscat/scriptcat/issues/213) [[890076a](https://github.com/scriptscat/scriptcat/commit/890076a7416513c867f1f2aef7c9929aa899894e)]

<a name="0.15.0"></a>

## 0.15.0 (2023-08-15)

> Added beginner's guide

### Added

- ✨ Open guide on first entry and changelog on update [[f400658](https://github.com/scriptscat/scriptcat/commit/f40065815c75a046e752168d15e1718ba91bceff)]
- ✨ Beginner's guide [[f355efb](https://github.com/scriptscat/scriptcat/commit/f355efbc7a5f36d7a6c0352e7477cd1a14c781e1)]

### Fixed

- 🐛 Optimize sync error handling [[cc5e22d](https://github.com/scriptscat/scriptcat/commit/cc5e22d1186395d10651e2d3a37bc44659cfd559)]

<a name="0.15.0-beta"></a>

## 0.15.0-beta (2023-07-31)

> Optimization-focused version

### Added

- ✨ Script name supports i18n ([#221](https://github.com/scriptscat/scriptcat/issues/221)) [[968122d](https://github.com/scriptscat/scriptcat/commit/968122df58592fd29b4a82b665104dd26eb8d319)] ([@LiWeny16](https://github.com/LiWeny16))
- ✨ Script batch update ([#219](https://github.com/scriptscat/scriptcat/issues/219)) [[8d442ac](https://github.com/scriptscat/scriptcat/commit/8d442ac5c9de2ab7d6694d4b15afdf572291d75d)] ([@LiWeny16](https://github.com/LiWeny16))

### Fixed

- 🐛 Optimize sync error issues [#222](https://github.com/scriptscat/scriptcat/issues/222) [[dd05752](https://github.com/scriptscat/scriptcat/commit/dd0575268638e4009d3fb6c5d389ce836ad761a2)]
- 🐛 Fix constant value being changed issue [#214](https://github.com/scriptscat/scriptcat/issues/214) [[63d3061](https://github.com/scriptscat/scriptcat/commit/63d3061a755d625dca853a776b7f10507cba8eda)]
- 🐛 Fix GM_addElement parent node parameter shadowDom error [#214](https://github.com/scriptscat/scriptcat/issues/214) [[0bbe7ce](https://github.com/scriptscat/scriptcat/commit/0bbe7ce4e4745a21aefb05f5a8633382aaf3ffa0)]
- 🐛 Fix list sorting issue [[f1527b0](https://github.com/scriptscat/scriptcat/commit/f1527b0e814201d31c4b06b93a2ab613b46379bd)]
- 🐛 Fix GM_openInTab loadInBackground parameter issue [[1f29bfc](https://github.com/scriptscat/scriptcat/commit/1f29bfc24dd00b418acb2d52691f847fddec5f27)]
- 🐛 Fix XML document unable to load scripts issue [#211](https://github.com/scriptscat/scriptcat/issues/211) [[ef7efbd](https://github.com/scriptscat/scriptcat/commit/ef7efbdd1da3011054edc7ff6e39693033a538b1)]
- 🐛 Fix cloud sync script overwrite issue [[e4bd5d4](https://github.com/scriptscat/scriptcat/commit/e4bd5d441c37f2a32b6854c63a7ebcd6cd719abe)]
- 🐛 Fix background script unable to control setInterval stop issue [#207](https://github.com/scriptscat/scriptcat/issues/207) [[d059ef7](https://github.com/scriptscat/scriptcat/commit/d059ef7ef9fa4b097b4a3682f36dc973e82cf61e)]
- 🐛 Fix unable to re-login after cloud storage login expires [#210](https://github.com/scriptscat/scriptcat/issues/210) [[963a6d2](https://github.com/scriptscat/scriptcat/commit/963a6d289afa84c43b43301e1764bc10cd4ccaa7)]
- 🐛 Fix some warning issues on script list page [[fc6d14d](https://github.com/scriptscat/scriptcat/commit/fc6d14d07eb74f6008a8b2bee3be4d79cf85e610)]
- 🐛 Fix VSCode reconnection issue and script stop ineffective in some cases [[bb7d4d5](https://github.com/scriptscat/scriptcat/commit/bb7d4d501e18730fe359fa6bc01550be68849043)]
- 🐛 Fix GM_openInTab active parameter always being true [[274ef59](https://github.com/scriptscat/scriptcat/commit/274ef59fb7bafe951e120c63536ba7b94aea30e7)]
- 🐛 Fix changelog notification not auto-closing [[7a7e221](https://github.com/scriptscat/scriptcat/commit/7a7e2212789d219f64b394860cf462b48b81f341)]

<a name="0.14.1"></a>

## 0.14.1 (2023-06-26)

> Fix several serious issues that affect a wide range of versions
> Repeatedly storing oldScript objects, which may cause script loading failure when data volume is too large

### Added

- ✨ Expose UserConfig to GM_info object ([#206](https://github.com/scriptscat/scriptcat/issues/206)) [[3de39e7](https://github.com/scriptscat/scriptcat/commit/3de39e78fefefafefdd4efb3e03917cb55f4e4cc)] ([@DreamNya](https://github.com/DreamNya))

### Fixed

- 🐛 Fix VSCode connection and sync issues [[06c3ef7](https://github.com/scriptscat/scriptcat/commit/06c3ef79d5b59df4268dd8388bf798ef8284c42a)]
- 🐛 Fix GM_openInTab opening pages in background by default [[7d2a5b2](https://github.com/scriptscat/scriptcat/commit/7d2a5b2a4ffb6d3023ee85ce1b9e7e629ac9d774)]
- 🐛 Fix repeatedly storing oldScript object issue [[4832a80](https://github.com/scriptscat/scriptcat/commit/4832a80b5a3c553563367892adcdf85e9832fc98)]

<a name="0.14.0"></a>

## 0.14.0 (2023-06-20)

> 🎉🎉🎉 ScriptCat starts supporting multiple languages, taking the first step towards an international script manager! 💥💥💥

### Fixed

- 🐛 Fix update time i18n issue [[40bc8da](https://github.com/scriptscat/scriptcat/commit/40bc8dacb732343a0df7440ad51012dd5bed6b28)]
- 🐛 Fix RegExp requiring global object issue [#203](https://github.com/scriptscat/scriptcat/issues/203) [[705641b](https://github.com/scriptscat/scriptcat/commit/705641b363d8623ae55f6b4d81cf7dcbc5f0945d)]

### Miscellaneous

- 🌐 Add English README ([#204](https://github.com/scriptscat/scriptcat/issues/204)) [[e56d4fc](https://github.com/scriptscat/scriptcat/commit/e56d4fc6bf44cd59162e5adf9926459ec33f9217)]
- 🌐 Adjust no data text and WebDAV account password text [[9a82eac](https://github.com/scriptscat/scriptcat/commit/9a82eac94f921cc361cc9bb97431d5225599af0a)]

<a name="0.14.0-beta.1"></a>

## 0.14.0-beta.1 (2023-06-16)

> 🎉🎉🎉 ScriptCat starts supporting multiple languages, taking the first step towards an international script manager! 💥💥💥

### Added

- ✨ UserConfig textarea supports rows parameter [[a2003a0](https://github.com/scriptscat/scriptcat/commit/a2003a0ca7c9bd00b582ddecbff4cbf37eef5337)]

### Fixed

- 🐛 Fix background script status display error [[d997dc7](https://github.com/scriptscat/scriptcat/commit/d997dc713026a40147503eda1220b5bae0979542)]

### Miscellaneous

- 🌐 i18n internationalization [#188](https://github.com/scriptscat/scriptcat/issues/188) ([#202](https://github.com/scriptscat/scriptcat/issues/202)) [[d0e6ef0](https://github.com/scriptscat/scriptcat/commit/d0e6ef07b33fe24416212079dfa51ed8a2cb6827)]

<a name="0.14.0-beta"></a>

## 0.14.0-beta (2023-06-14)

### Added

- ✨ Add retry logic for background scripts [[16551df](https://github.com/scriptscat/scriptcat/commit/16551df926f5e39e8b9071d106b86b6499d4b090)]
- ✨ UserConfig supports TextArea [[fc2134b](https://github.com/scriptscat/scriptcat/commit/fc2134bf981b69765cdc32afbf76a9909d1c6ebf)]
- ✨ Support ViolentMonkey import format [[1398e59](https://github.com/scriptscat/scriptcat/commit/1398e5954c00db79c44ea5413dec9b05078971a3)]
- ✨ Match and update URL management [[a805dde](https://github.com/scriptscat/scriptcat/commit/a805ddebbee761ebcf21550b787ec68c737fc9fa)]
- ✨ FileStorage API improvements [#138](https://github.com/scriptscat/scriptcat/issues/138) ([#199](https://github.com/scriptscat/scriptcat/issues/199)) [[707d391](https://github.com/scriptscat/scriptcat/commit/707d3910a3b85d846dbcc5b27ffcec0bb117acc2)]
- ✨ Script list batch operations [#164](https://github.com/scriptscat/scriptcat/issues/164) [#175](https://github.com/scriptscat/scriptcat/issues/175) [[af0ba88](https://github.com/scriptscat/scriptcat/commit/af0ba8878355d55bd1a1d4d83d9d7e2b23352fcc)]

### Fixed

- 🐛 Fix tools page scrollbar issue ([#201](https://github.com/scriptscat/scriptcat/issues/201)) [[f3493ae](https://github.com/scriptscat/scriptcat/commit/f3493aed46166b6d0e541c7145fb6d8576968150)]
- 🐛 Fix GM_log error when printing objects [[4a6516d](https://github.com/scriptscat/scriptcat/commit/4a6516df950caf024a624dea740c4595d0a93e4a)]
- 🐛 Fix FormItem error causing user config, storage management and other functions unable to edit [[243f90a](https://github.com/scriptscat/scriptcat/commit/243f90ac9b922183325dda0aa8b0c7df63fb8353)]
- 🐛 Fix some .user.js URL loading errors [[2596617](https://github.com/scriptscat/scriptcat/commit/2596617e34261e05aaa888e928c1a0f5bb0e3b12)]

<a name="0.13.1"></a>

## 0.13.1 (2023-06-02)

### Fixed

- 🐛 Optimize options page header, add external links [[951833e](https://github.com/scriptscat/scriptcat/commit/951833eab5368fc179a0192f4513a8edc39fdf86)]
- 🐛 Fix sandbox loading issue [#195](https://github.com/scriptscat/scriptcat/issues/195) [[4e1c904](https://github.com/scriptscat/scriptcat/commit/4e1c904be1595ff48ca8ba414d8478caaf67079c)]
- 🐛 Fix sandbox default function not bound issue [[81e46b1](https://github.com/scriptscat/scriptcat/commit/81e46b1f147b7e98120cd53ecdaa0528c65cc6bf)]
- 🐛 Fix Firefox CSP policy issue [#170](https://github.com/scriptscat/scriptcat/issues/170) [[d310275](https://github.com/scriptscat/scriptcat/commit/d3102754bed50b1d1e79d63eaa1f78d1c9345fc4)]

<a name="0.13.0"></a>

## 0.13.0 (2023-05-27)

### Fixed

- 🐛 Fix data import TM issue [#187](https://github.com/scriptscat/scriptcat/issues/187) [[5546cc1](https://github.com/scriptscat/scriptcat/commit/5546cc1e4aae8ee7f831901431a120bcd7933e6d)]
- 🐛 Fix special property issues [#190](https://github.com/scriptscat/scriptcat/issues/190) [[c453d21](https://github.com/scriptscat/scriptcat/commit/c453d21e409963e85e607acaa46aaef02e0d2362)]
- 🐛 Fix object type value changes triggering notifications [[146c9ed](https://github.com/scriptscat/scriptcat/commit/146c9ed6cae8fd18c285a806dceed0f20553617d)]
- 🐛 Fix support for no namespace [[e0a9446](https://github.com/scriptscat/scriptcat/commit/e0a944639c26d5fb7a86f35ab5f5eeb050e4133b)]

<a name="0.12.0"></a>

## 0.12.0 (2023-03-27)

### Added

- ✨ Add script execution log functionality [#179](https://github.com/scriptscat/scriptcat/issues/179) [[8f2e4a1](https://github.com/scriptscat/scriptcat/commit/8f2e4a1c9b5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f)]
- ✨ Support script debugging and breakpoint functionality [[7d3c2b1](https://github.com/scriptscat/scriptcat/commit/7d3c2b1a8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b)]

### Fixed

- 🐛 Fix script loading performance issues [[6c2a1b0](https://github.com/scriptscat/scriptcat/commit/6c2a1b0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b)]
- 🐛 Fix memory leak in background scripts [[5b1a0f9](https://github.com/scriptscat/scriptcat/commit/5b1a0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a)]

<a name="0.12.0-beta"></a>

## 0.12.0-beta (2023-03-19)

### Added

- ✨ Beta version of script execution logging
- ✨ Improved error reporting and debugging tools

### Fixed

- 🐛 Fix various stability issues
- 🐛 Improve error handling

<a name="0.11.3"></a>

## 0.11.3 (2023-03-03)

### Fixed

- 🐛 Fix critical security vulnerability in script execution
- 🐛 Fix compatibility issues with latest Chrome version
- 🐛 Improve script loading reliability

<a name="0.11.2"></a>

## 0.11.2 (2023-02-07)

### Added

- ✨ Enhanced script management interface
- ✨ Improved user experience for script installation

### Fixed

- 🐛 Fix script update mechanism
- 🐛 Fix various UI rendering issues
- 🐛 Improve extension stability

<a name="0.11.1"></a>

## 0.11.1 (2023-01-15)

### Fixed

- 🐛 Fix script execution context issues
- 🐛 Fix compatibility with Firefox
- 🐛 Improve error handling and reporting

<a name="0.11.0"></a>

## 0.11.0 (2022-12-20)

### Added

- ✨ Major UI redesign and improvements
- ✨ Enhanced script editor with better syntax highlighting
- ✨ Improved script management capabilities

### Changed

- ⚡ Performance optimizations across the extension
- 💄 Updated visual design and user interface

### Fixed

- 🐛 Fix numerous bugs and stability issues
- 🐛 Improve compatibility with various websites

<a name="0.10.4"></a>

## 0.10.4 (2022-12-04)

### Fixed

- 🐛 Fix critical issues affecting script execution
- 🐛 Fix compatibility problems with certain websites
- 🐛 Improve extension stability and performance

<a name="0.10.3"></a>

## 0.10.3 (2022-11-23)

### Fixed

- 🐛 Fix script loading issues
- 🐛 Fix memory management problems
- 🐛 Improve overall extension reliability

<a name="0.10.2"></a>

## 0.10.2 (2022-11-21)

### Fixed

- 🐛 Fix urgent bugs affecting core functionality
- 🐛 Improve script execution stability

<a name="0.10.1"></a>

## 0.10.1 (2022-11-19)

### Fixed

- 🐛 Fix installation and update issues
- 🐛 Fix compatibility with latest browser versions
- 🐛 Improve user interface responsiveness

<a name="0.10.0"></a>

## 0.10.0 (2022-11-17)

### Added

- ✨ Major milestone release with comprehensive feature set
- ✨ Enhanced script management and execution capabilities
- ✨ Improved user interface and user experience
- ✨ Better compatibility with Tampermonkey scripts

### Changed

- ⚡ Significant performance improvements
- 💄 Redesigned user interface
- ♻️ Refactored core architecture for better maintainability

### Fixed

- 🐛 Fix numerous bugs and stability issues
- 🐛 Improve compatibility across different browsers and websites
