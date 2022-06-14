## Develop

* ts-node

### Build resolution

* rollup
* tsc

### Debug

ts-node:

```shell
node --inspect-brk -r ts-node/register path/to/ts
```

### Record

`JavaScript` library for building CLI apps:

* [commander](https://github.com/tj/commander.js/)
* [cac](https://github.com/cacjs/cac)

some knowledge:

* [terminology](https://github.com/tj/commander.js/blob/master/docs/terminology.md)
* api: read api from source code type definition file

### Command

### Option

* each option can have a short flag(single character) and a long name, separated by a comma or space or vertical bar('|')
