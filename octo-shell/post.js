const axios = require('axios');
const fs = require('fs');
const path = require('path');

const pub = async (repoName) => {
  const token = fs.readFileSync('./node_modules/octoshell/cred.txt', 'utf-8').trim();

  // fetch username from the GitHub API
  const response = await axios.get('https://api.github.com/user', {
    headers: {
      'Authorization': `token ${token}`,
    },
  });
  const username = response.data.login;

  // create new repo
  await axios.post(`https://api.github.com/user/repos`, {
    name: repoName,
  }, {
    headers: {
      'Authorization': `token ${token}`,
    },
  });

  // get all files in current directory
  const files = fs.readdirSync('./');

  // upload each file to the repo
  for (const file of files) {
    if (fs.lstatSync(file).isFile()) {
      const content = fs.readFileSync(file, 'utf-8');
      await axios.put(`https://api.github.com/repos/${username}/${repoName}/contents/${file}`, {
        message: `Add ${file}`,
        content: Buffer.from(content).toString('base64'),
      }, {
        headers: {
          'Authorization': `token ${token}`,
        },
      });
    }
  }

  // upload each directory to the repo
  for (const file of files) {
    if (fs.lstatSync(file).isDirectory()) {
      const dirPath = `./${file}`;
      const dirFiles = fs.readdirSync(dirPath);

      // create directory in the repo
      try {
        await axios.put(`https://api.github.com/repos/${username}/${repoName}/contents/${file}/octo.shell`, {
          message: `Create directory ${file}`,
          content: '',
          type: 'dir',
        }, {
          headers: {
            'Authorization': `token ${token}`,
          },
        });
      } catch (error) {
        if (error.response.status === 422) {
          console.log(`Directory ${file} already exists in the repository. Skipping...`);
        } else {
          console.error(`Failed to create directory ${file}: ${error}`);
        }
        continue;
      }

      // upload each file in the directory to the repo
      for (const dirFile of dirFiles) {
        const filePath = path.join(dirPath, dirFile);
        if (filePath.includes('.cache/replit')) continue;
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
          const content = fs.readFileSync(filePath, 'utf-8');
          await axios.put(`https://api.github.com/repos/${username}/${repoName}/contents/${file}/${dirFile}`, {
            message: `Add ${dirFile}`,
            content: Buffer.from(content).toString('base64'),
          }, {
            headers: {
              'Authorization': `token ${token}`,
            },
          });
        } else if (stats.isDirectory()) {
          // Skipped
        }
      }
    }
  }
};

module.exports = { pub };