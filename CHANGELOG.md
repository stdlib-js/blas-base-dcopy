# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-07-22)

<section class="features">

### Features

-   [`40502bb`](https://github.com/stdlib-js/stdlib/commit/40502bb62ccef0eecf1132430422a35ae9e5dd3a) - add C `ndarray` implementation for `blas/base/dcopy` [(#2906)](https://github.com/stdlib-js/stdlib/pull/2906)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`e039f2a`](https://github.com/stdlib-js/stdlib/commit/e039f2a6f7ff1b4141dba2d0f5a2fb8a03d7a9b8) - consistently use constants instead of hardcoded numbers in unrolled BLAS loops

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`11f3cfa`](https://github.com/stdlib-js/stdlib/commit/11f3cfa5a658d7cb105aeb2578b7d72ea62f1e97) - **refactor:** update include header guards for double precision real packages [(#7711)](https://github.com/stdlib-js/stdlib/pull/7711) _(by Shabareesh Shetty)_
-   [`e039f2a`](https://github.com/stdlib-js/stdlib/commit/e039f2a6f7ff1b4141dba2d0f5a2fb8a03d7a9b8) - **fix:** consistently use constants instead of hardcoded numbers in unrolled BLAS loops _(by Philipp Burckhardt)_
-   [`09c9ceb`](https://github.com/stdlib-js/stdlib/commit/09c9ceb58c6dd23c10f1980094851983c57d693f) - **chore:** fix formatting _(by Athan Reines)_
-   [`51bf6f9`](https://github.com/stdlib-js/stdlib/commit/51bf6f9d2bb027aacecda87e02f957badbc246b0) - **bench:** fix formatting _(by Athan Reines)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`40502bb`](https://github.com/stdlib-js/stdlib/commit/40502bb62ccef0eecf1132430422a35ae9e5dd3a) - **feat:** add C `ndarray` implementation for `blas/base/dcopy` [(#2906)](https://github.com/stdlib-js/stdlib/pull/2906) _(by Aman Bhansali, Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Aman Bhansali
-   Athan Reines
-   Philipp Burckhardt
-   Shabareesh Shetty

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-27)

<section class="features">

### Features

-   [`faa875a`](https://github.com/stdlib-js/stdlib/commit/faa875a920a06b4671b59db2b574c7f7a7702372) - add support for specifying integer size

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`5c514c7`](https://github.com/stdlib-js/stdlib/commit/5c514c7ad5828bc5047594ff001d11334f8f5670) - specify integer type to match CBLAS

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`5418177`](https://github.com/stdlib-js/stdlib/commit/5418177d92f26a6d99bd53d19713f2fa0d536b27) - **refactor:** use macro to convert stride to offset _(by Athan Reines)_
-   [`c3895df`](https://github.com/stdlib-js/stdlib/commit/c3895df672126473f5803e93b529bcdd0775c75a) - **refactor:** use utility to resolve an index offset _(by Athan Reines)_
-   [`4d08374`](https://github.com/stdlib-js/stdlib/commit/4d0837401b68ebd4e5b8c38e0214158dbe410a07) - **refactor:** reduce code duplication [(#2479)](https://github.com/stdlib-js/stdlib/pull/2479) _(by Aman Bhansali, Athan Reines)_
-   [`6226f32`](https://github.com/stdlib-js/stdlib/commit/6226f32ba8be2b8d880353194c510e629760b53f) - **docs:** update signatures _(by Athan Reines)_
-   [`101bd6d`](https://github.com/stdlib-js/stdlib/commit/101bd6d2a57bbbb447d9ac5ba8bdca48af8daafe) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`5c514c7`](https://github.com/stdlib-js/stdlib/commit/5c514c7ad5828bc5047594ff001d11334f8f5670) - **fix:** specify integer type to match CBLAS _(by Athan Reines)_
-   [`faa875a`](https://github.com/stdlib-js/stdlib/commit/faa875a920a06b4671b59db2b574c7f7a7702372) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`38464b7`](https://github.com/stdlib-js/stdlib/commit/38464b74545be9702eda7bae820c40b56e7e7256) - **docs:** remove comments _(by Athan Reines)_
-   [`f1576ec`](https://github.com/stdlib-js/stdlib/commit/f1576ec5ade09cd8cd034dc0db8c9f5c7d70e3eb) - **docs:** remove comments _(by Athan Reines)_
-   [`9e3e28c`](https://github.com/stdlib-js/stdlib/commit/9e3e28cfee19c2dd7ab0aecc67ccf11b3662cc14) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`0244027`](https://github.com/stdlib-js/stdlib/commit/0244027e1e2c0ceb1cd8ae1808196c24fa77b142) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Aman Bhansali
-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="bug-fixes">

### Bug Fixes

-   [`54b4641`](https://github.com/stdlib-js/stdlib/commit/54b4641053df8e23221a17660e63e581a984fe78) - remove unnecessary cast

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`004b244`](https://github.com/stdlib-js/stdlib/commit/004b24478b4af2a51f2e568fe2c1efd8cb5ef59d) - **docs:** update examples to use random/array utilities _(by Athan Reines)_
-   [`efc6522`](https://github.com/stdlib-js/stdlib/commit/efc65220a39e226839fd507b59190d6402bebe61) - **bench:** update benchmarks to use random/array utilities _(by Athan Reines)_
-   [`4ec2cd0`](https://github.com/stdlib-js/stdlib/commit/4ec2cd0d22446eac8818845f4a816d2d4a1bfde2) - **docs:** update copy _(by Athan Reines)_
-   [`cbee5b7`](https://github.com/stdlib-js/stdlib/commit/cbee5b72476134d157d3b7f93c73ce13b99a932f) - **build:** add and update wasm configurations _(by Athan Reines)_
-   [`5a36be3`](https://github.com/stdlib-js/stdlib/commit/5a36be3f681bf65914abdc58bbc3142533cb2328) - **style:** resolve lint errors _(by Athan Reines)_
-   [`54b4641`](https://github.com/stdlib-js/stdlib/commit/54b4641053df8e23221a17660e63e581a984fe78) - **fix:** remove unnecessary cast _(by Athan Reines)_
-   [`46859da`](https://github.com/stdlib-js/stdlib/commit/46859dacafba5f446341e634a693a392dda150e4) - **docs:** update description _(by Athan Reines)_
-   [`85861b0`](https://github.com/stdlib-js/stdlib/commit/85861b0500a4b14e80236199903afa8e7c120e97) - **style:** convert indentation to spaces _(by Athan Reines)_
-   [`6785992`](https://github.com/stdlib-js/stdlib/commit/678599207a8555fa339e05783fa23e345202b69f) - **test:** update assertion descriptions _(by Athan Reines)_
-   [`edf8966`](https://github.com/stdlib-js/stdlib/commit/edf8966c7d2c25b1321d8e0a1f19f269a7c1d17c) - **docs:** update parameter description _(by Athan Reines)_
-   [`4d3baf9`](https://github.com/stdlib-js/stdlib/commit/4d3baf9116e0ce83dba9fb0a3d4ec58be4abcee4) - **style:** fix line wrapping _(by Athan Reines)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-04)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`4d943eb`](https://github.com/stdlib-js/stdlib/commit/4d943eb98ed10314432bbfa5a3af3634ea19b969) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`9d552f8`](https://github.com/stdlib-js/stdlib/commit/9d552f8ee1087df295267fd3ddc2e5a04526ed6a) - **docs:** standardize parameter description and update docs _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2022-11-03)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-08-30)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

