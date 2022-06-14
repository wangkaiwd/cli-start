## Develop
* [pure esm package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
* ts-node

### Build resolution

User doesn't need declaration file

* rollup
* tsc

Issue:

* [tsc command not use `include` config in `tsconfig.json`](https://github.com/Microsoft/TypeScript/issues/19798)

### Debug

ts-node:

```shell
node --inspect-brk -r ts-node/register path/to/ts
```

### Record

`JavaScript` library for building CLI apps:

* [commander](https://github.com/tj/commander.js/)
* [cac](https://github.com/cacjs/cac)
* [yargs](https://github.com/yargs/yargs)

some knowledge:

* [terminology](https://github.com/tj/commander.js/blob/master/docs/terminology.md)
* api: read api from source code type definition file

### Command

### Option

* each option can have a short flag(single character) and a long name, separated by a comma or space or vertical bar('|')
