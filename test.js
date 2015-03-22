'use strict';

var assert = require("assert");
var ssh = require("./").ssh;
var https = require("./").https;

describe("test suite for git repo url", function() {

  it("should genrate https user from user and repo name", function() {
    var url = https("yashprit", "generator-bode");
    assert.equal(url, "https://github.com/yashprit/generator-bode.git", "should match https url");
  });

  it("should genrate https user from user and repo name", function() {
    var url = ssh("yashprit", "generator-bode");
    assert.equal(url, "git@github.com:yashprit/generator-bode.git", "should match https url");
  });

});
