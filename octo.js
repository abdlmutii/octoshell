#!/usr/bin/env node
'use strict';

const prompts = require('prompts');
const fs = require("fs")
const c = require("chalk");

let {exp} = require("./octo-shell/exp.js");
let {pub} = require("./octo-shell/post.js");
let {auth} = require("./octo-shell/auth.js");
let {star} = require("./octo-shell/star.js");
let {gist} = require("./octo-shell/gist.js");
let token = fs.readFileSync('./node_modules/octoshell/cred.txt', 'utf-8').trim();
let args = process.argv.slice(2);

if(!args[0]) {
  
const cmds = [
  {
      type: "text",
      name: 'cmd',
      message: 'Select an command:',
  },
];
  
const choices = ["auth", "star", "publish", "gist", "explore", "au", "s", "g", "exp", "pub"];
(async () => {
  let res = await prompts(cmds);
  if(!choices.includes(res.cmd)) throw Error("Invalid command!, available commands are: [auth, explore, star, publish, gist], shorten commands are: [exp, pub, s, g, au]");
  if(res.cmd === "auth" || res.cmd === "au") {
    console.log('To authenticate with GitHub and get your personal access token:');
console.log('- On your computer: \n   1. Go to https://github.com/settings/tokens \n   2. Click on "Generate new token" \n   3. Give the token a description and select the scopes you need \n   4. Click on "Generate token" and copy the token \n   5. Paste your token here\n');
console.log('- On your mobile device: \n   1. Open https://github.com \n   2. Go to your profile and tap "Settings" \n   3. Tap "Developer settings" \n   4. Tap "Personal access tokens" \n   5. Tap "Generate new token" and follow the steps \n   6. Paste your token here\n');
    auth();
  } 
  if(res.cmd === "explore" || res.cmd === "exp") {
    exp();
  }
  if (res.cmd === "star" || res.cmd === "s") {
if(!token) console.log("You should use it in separate command. you should use \"octo star [reponame]\".. and you should do \"octo auth\".");
    else console.log("You should use it in separate command. you should use \"octo star [reponame]\".");
  } 
  if (res.cmd === "publish" || res.cmd === "pub") {
    if(!token) console.log("You should use it in separate command. you should use \"octo publish [reponame]\".. and you should do \"octo auth\".");
    else console.log("You should use it in separate command. you should use \"octo publish [reponame]\".");
  }
  if(res.cmd === "gist" || res.cmd === "g") {
    if(!token) console.log("You should use it in separate command. you should use \"octo gist [filename]\".. and you should do \"octo auth\".");
    else console.log("You should use it in separate command. you should use \"octo gist [filename]\".");
  }
})();
} else if(args[0] === "auth" || args[0] === "au") {
  console.log('To authenticate with GitHub and get your personal access token:');
console.log('- On your computer: \n   1. Go to https://github.com/settings/tokens \n   2. Click on "Generate new token" \n   3. Give the token a description and select this scopes: repo, gist, read:user \n   4. Click on "Generate token" and copy the token \n   5. Paste your token here or set the token as an environment variable named "GITHUB_TOKEN"\n');
console.log('- On your mobile device: \n   1. Open the GitHub app \n   2. Go to your profile and tap "Settings" \n   3. Tap "Developer settings" \n   4. Tap "Personal access tokens" \n   5. Tap "Generate new token" and give the token a description, then select this scopes: repo, gist, read:user \n   6. Paste your token here or set the token as an environment variable named "GITHUB_TOKEN"\n');
  auth();
} else if(args[0] === "explore" || args[0] === "exp") {
  exp();
} else if(args[0] === 'star' || args[0] === "s") {
if(!token) throw Error("Use `octo auth` or just put your github token in your .env file and call it `GITHUB_TOKEN`");
  if(!args[1]) args[1] = "random";
  star(args[1]);
} else if(args[0] === "publish" || args[0] === "pub") {
if(!token) throw Error("Use `octo auth` or just put your github token in your .env file and call it `GITHUB_TOKEN`");
  await pub(args[1]);
  console.log(`${c.bold.greenBright(`You've posted ${args[1]}`)}`);
} else if(args[0] === "gist" || args[0] === "g") {
if(!token) throw Error("Use `octo auth` or just put your github token in your .env file and call it `GITHUB_TOKEN`");
  if(!args[1]) throw Error("You should put the filename. only the description is the optional. filename is REQUIRED!");
  if(args[2]) gist(args[1], args[2]);
  else gist(args[1], `This is a gist made by OctoShell! try it right now https://npmjs.com/package/octoshell`)
}