# which-pm-runs-cli

Easily know which package manager is running your package.json scripts.

## Usage

```
yarn add --dev which-pm-runs-cli
```

```
{
    "scripts": {
        "preinstall": "which-pm-runs --is yarn || echo 🛑 Yarn is required to setup this project!"
    }
}
```

```
❯ npm install
[...]
npm ERR! code ELIFECYCLE
🛑 Yarn is required to setup this project!
❯ echo $?
1

❯ yarn install
[...]
❯ echo $?
0
```
