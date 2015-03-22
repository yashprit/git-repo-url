#!/usr/bin/env node

'use strict';
var argv = require('minimist')(process.argv.slice(2));
var gitRepoUrl = require('./');

var url = gitRepoUrl[argv.t](argv.u, argv.r);

console.log(url)
