## Develop

* [pure esm package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

Execute following command:

```shell
pnpm link
cd test
vt create starter
```

### Build resolution

User doesn't need declaration file

* rollup
* tsc

Issue:

* [tsc command not use `include` config in `tsconfig.json`](https://github.com/Microsoft/TypeScript/issues/19798)

### Debug

How to debug ?

### Record

`JavaScript` library for building CLI apps:

* [commander](https://github.com/tj/commander.js/)
* [cac](https://github.com/cacjs/cac)
* [yargs](https://github.com/yargs/yargs)

some knowledge:

* [terminology](https://github.com/tj/commander.js/blob/master/docs/terminology.md)
* api: read api from source code type definition file

### Command

* using an action handler attached to the command
* stand-alone executable file

### Option

* each option can have a short flag(single character) and a long name, separated by a comma or space or vertical bar('
  |')

### Problems

* fs operate: [fs-extra](https://github.com/jprichardson/node-fs-extra)
  * recursively create directory asynchronous
    * depth first
    * breadth first
    * parallel
    * serial
  * recursively create directory synchronous
* write template to user computer machine ?

handle path: can employ environment variables file ?

* file path change after build (configuration file ?)
  * first compile ts to `JavaScript`, then test with `npm link`. So code always work under dist directory
* how to get app root path accurately
* `pnpm` arguments for script and for itself 
