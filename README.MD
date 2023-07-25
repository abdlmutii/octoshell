# OctoShell
<a href="https://discord.gg/8UqPNbeYBv"><img src="https://img.shields.io/discord/1077492444574261339?style=for-the-badge&color=5865F2&logo=discord&logoColor=white&label=Abdlmu'tii" alt="Discord server" /></a><br>
A command line interface to interact with GitHub using Node.js.
> P.S: This GitHub repo is posted with octoshell. cool right?

## Installation
To install OctoShell, you should use npm:
```sh
npm i octoshell -g
```

## Usage
To use OctoShell, run the command `octo` or `octoshell` followed by a command:
```sh
octo [command]
```
Available commands are:

- auth: Authenticate with GitHub and get your personal access token.
- explore: Explore GitHub repositories.
- star: Star a GitHub repository.
- publish: Publish a GitHub repository.
- gist: Create a GitHub gist.

### `auth`
To authenticate with GitHub, run:
```sh
octo auth
```

### `explore`
To explore random GitHub repositories, run:

```bash
octo explore
```

### `star`
To star a GitHub repository, run:
```bash
octo star [repo_full_name]
```
Replace the `[repo_full_name]` with the repo full name. e.g: `octo star abdlmutii/cli`, you can also type `octo star random` to star random repo!
**Note**: Before using this command, you need to authenticate with GitHub and set your personal access token. You can authenticate with GitHub by running `octo auth`

### `publish`
To publish a GitHub repository, run:
```sh
octo publish [reponame]
```
**Note**: Before using this command, you need to authenticate with GitHub and set your personal access token. You can authenticate with GitHub by running `octo auth`

### `gist`
To create a GitHub gist, run:

```bash
octo gist [filename] [optinal:description]
```

**Note**: Before using this command, you need to authenticate with GitHub and set your personal access token. You can authenticate with GitHub by running `octo auth`.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the CC-BY-4.0 License - see the [LICENSE.md](LICENSE.md) file for details.

## Credits
Credits goes to [abdlmutii](https://github.com/abdlmutii), if you like this npm package please remember to check other work i've done on github and `octo star abdlmutii/octoshell` 😉.<br>
**Email**: [abdlmutii@outlook.com](mailto:abdlmutii@outlook.com)
<br>
**Business Email**: [abdlmutii.buz@outlook.com](mailto:abdlmutii.buz@outlook.com)
