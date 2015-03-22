'use strict';

var httpFragments = "https://github.com/";
var sshFragments = "git@github.com:";

/**
 * append username and reponame along with .git
 * @param  {string} username
 * @param  {string} reponame
 * @return {string}
 */
var combineRepoAndUrl = function(username, reponame) {
  return username + "/" + reponame + ".git";
}

/**
 * @api @public
 *
 * return ssh url
 *
 * @param  {string} username
 * @param  {string} reponame
 * @return {string}
 */
function ssh(username, reponame) {
  return sshFragments + combineRepoAndUrl(username, reponame);
}

/**
 * @api @public
 *
 * return https url
 *
 * @param  {string} username
 * @param  {string} reponame
 * @return {string}
 */
function https(username, reponame) {
  return httpFragments + combineRepoAndUrl(username, reponame);
}

/**
 * export public api
 */
exports.https = https;
exports.ssh = ssh;
