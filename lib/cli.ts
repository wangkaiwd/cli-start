#!/usr/bin/env node

import { Command } from 'commander';
import pkg from '../package.json';

const program = new Command();
const { version } = pkg;
program
  .name('vue-cli')
  .description('CLI to create vue project')
  .version(version);

program
  .command('create [name]', 'Create a vue project')
  .description('Create vue project')
  .option('-b, --bare', 'create a bare project')
  .action((name, options) => {
    console.log(name, options);
  });

program.parse();
