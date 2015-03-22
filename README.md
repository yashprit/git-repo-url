#  git-repo-url [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> create github https or git-ssh url from username and repo


## Install

```sh
$ npm install --save git-repo-url
```

## Usage

### JavaScript

```js
var https = require('git-repo-url').https;

https('yashprit', 'generator-bode'); 

//=> https://github.com/yashprit/generator-bode.git
```

### command line

```sh
$ npm install --global git-repo-url
$ git-repo-url --t ssh --u yashprit --r generator-bode

#result => git@github.com:yashprit/generator-bode.git
```

## Methods

```js
var gitRepoUrl = require('git-repo-url');

```

### ssh([username], [reponame])

get ssh url from username and reponame 

### https([username], [reponame])

get https url from username and reponame


## Run Test
```sh
npm test
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].

## License

MIT © [Yashprit](yashprit.github.io)


[issue-url]: https://github.com/yashprit/git-repo-url/issues
[npm-url]: https://npmjs.org/package/git-repo-url
[npm-image]: https://badge.fury.io/js/git-repo-url.svg
[travis-url]: https://travis-ci.org/yashprit/git-repo-url
[travis-image]: https://travis-ci.org/yashprit/git-repo-url.svg?branch=master
[daviddm-url]: https://david-dm.org/yashprit/git-repo-url.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/yashprit/git-repo-url
