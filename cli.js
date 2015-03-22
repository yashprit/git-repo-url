#!/usr/bin/env node

'use strict';
var meow = require('meow');
var gitRepoUrl = require('./lib');

var cli = meow({
  help: [
    'Usage',
    '  git-repo-url <input>',
    '',
    'Example',
    '  git-repo-url Unicorn'
  ].join('\n')
});

gitRepoUrl (cli.input[0]);
