const axios = require("axios");
const c = require("chalk");
const fs = require("fs");
const config = {
    headers: {
      Authorization: `Bearer ${fs.readFileSync("./node_modules/octoshell/cred.txt")}`,
    },
  };

const star = async (re) => {
  if(re === "random") {
    const response = await axios.get('https://api.github.com/repositories');
  const repositories = response.data;
  const randomRepo = repositories[Math.floor(Math.random() * repositories.length)];
  
  await axios.put(`https://api.github.com/user/starred/${randomRepo.full_name}`, null, config);
  console.log(`${c.bold.greenBright(`You've starred ${randomRepo.full_name}`)}`);
  } else {
    await axios.put(`https://api.github.com/user/starred/${re}`, null, config);
    console.log(`${c.bold.greenBright(`You've starred ${re}`)}`);
  }
};

module.exports = { star };