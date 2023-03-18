const prompts = require('prompts');
const fs = require('fs');

async function auth() {
  let res = await prompts([
    {
      type: 'password',
      name: 'token',
      message: 'Enter your GitHub Personal Access Token:',
    },
  ]);

fs.writeFileSync('./node_modules/octoshell/cred.txt', `${res.token}`);
}

module.exports = { auth };