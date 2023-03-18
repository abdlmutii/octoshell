const axios = require('axios');
const fs = require('fs');
const c = require("chalk");

function gist(fileName, description = `Gist made by OctoShell! try it right now https://npmjs.com/package/octoshell`) {
  const token = fs.readFileSync("./node_modules/octoshell/cred.txt"); 
  const fileContent = fs.readFileSync(fileName, 'utf-8');
  const files = {};
  files[fileName] = { content: fileContent };
axios.post('https://api.github.com/gists', {
    description: description,
    public: true,
    files: files
  }, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(response => {
    console.log(`${c.bold.greenBright(`Successfully created Gist: ${response.data.html_url}`)}`);
  })
  .catch(error => {
    console.error(`${c.bold.red(`Error creating new gist: ${error.message}`)}`)
  });
}

module.exports = {gist};