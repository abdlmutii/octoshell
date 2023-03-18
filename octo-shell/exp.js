const axios = require("axios");
const c = require("chalk");
const terminalImage = require('terminal-image');

async function displayImage(imageUrl) {
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const imageBuffer = Buffer.from(response.data, 'binary');
  const image = await terminalImage.buffer(imageBuffer, {width: '33%'});
  console.log(image);
}

async function exp() {
  const response = await axios.get('https://api.github.com/repositories');
  const repositories = response.data;
  const numRepos = Math.floor(Math.random() * 15) + 1;
  console.log(`Here are ${numRepos} random repositories:`);
  for (let i = 0; i < numRepos; i++) {
    const repo = repositories[Math.floor(Math.random() * repositories.length)];
    await displayImage(repo.owner.avatar_url)
    console.log(`${c.bold.greenBright(repo.name)} from ${c.bold.redBright(repo.owner.login)}: ${c.bold(repo.description)}\n==============================`);
  }
}

module.exports = { exp };