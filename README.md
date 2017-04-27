# generator-ionic-gulp-boilerplate [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> ionic gulp build boilerplate

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ionic-gulp-boilerplate using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ionic-gulp-boilerplate
```

Then generate your new project:

```bash
yo ionic-gulp-boilerplate
```
## 개요 - summary

ionic 개발을 위해서 www 폴더 내에서 직접 개발이 아닌, public folder에서 개발 후, build만 www 폴더에서 하도록 변경한 데모입니다.

In order to develop a non- ionic developed directly within the www folder , and then developed in the public folder, build just a demo to changes in the www folder.

## 주의점 - Precautions

현재 모든 개발 소스는 public 폴더에서 관리하고 있습니다. 기타 라이브러리는 bower로 설치하되, bower_components에서 소스를 불러오고, 이를 vender.js라는 파일로 빌드해서 사용하기 때문에, www폴더를 바라보고 있지 않습니다. (ionic도 포함입니다.)

All current sources are developed and managed in the public folder. Other libraries are installed, but a bower, recall the source from bower_components, because they use it to build a file called vender.js, do not look at the www folder. ( Including the ionic.)

## 설치 - Setting

ionic-gulp-boilerplate를 사용하기 위해서는 ionic이 설치되어 있어야 합니다.

If you use ionic-gulp-boilerplate, you must install ionic from npm. (version 1.0)

```bash
npm install -g ionic
```

npm install 및 bower install을 진행합니다.

You must commands npm install and bower install.

```bash
npm install
bower install
```

## 사용법 - Usage

### 1) gulp task 실행 - gulp task execution

개발 후에, public 폴더에서 www 폴더로 빌드하기 위해서, 다음과 같은 커맨드를 실행합니다.

In order to build after the development, in the public folder to the www folder , run the following commands

#### 1.1) 개발 모드 - Development Mode

개발모드에서는 각각의 file들을 watch 상태로 확인하게 됩니다. 확인해서 변경되는 파일은 www 폴더로 build합니다.

In development mode, you will identify each file to watch status. Identified by changing the file is build into the www folder.

```bash
$gulp dev
```

#### 1.2) 배포 모드 - Deployment Modes

배포모드에서는 따로 파일 변경을 감지하지 않으며, 각각의 파일에 대한 minify를 실행합니다.

In a separate deployment mode it does not detect file changes , run minify for each file.

```bash
$gulp prod
```

### 2) 실행 - Execution

#### 2.1) browser에서 test 모드로 실행 - Running in test mode browser

브라우저에서 테스트모드로 실행합니다. (개발 중일 경우입니다.)

Run in test mode in the browser. (If you are developing .)

```bash
$ionic serve
```

## License
MIT © [KernYoo](http://trustyoo86.github.io)


[npm-image]: https://badge.fury.io/js/generator-ionic-gulp-boilerplate.svg
[npm-url]: https://npmjs.org/package/generator-ionic-gulp-boilerplate
[travis-image]: https://travis-ci.org/trustyoo86/generator-ionic-gulp-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/trustyoo86/generator-ionic-gulp-boilerplate
[daviddm-image]: https://david-dm.org/trustyoo86/generator-ionic-gulp-boilerplate.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/trustyoo86/generator-ionic-gulp-boilerplate
[coveralls-image]: https://coveralls.io/repos/trustyoo86/generator-ionic-gulp-boilerplate/badge.svg
[coveralls-url]: https://coveralls.io/r/trustyoo86/generator-ionic-gulp-boilerplate
