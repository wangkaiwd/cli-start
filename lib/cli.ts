#!/usr/bin/env node

import { Command } from 'commander';
import pkg from '../package.json';
import create from './core/create';

const program = new Command();
const { version } = pkg;

// program.name:
// fallback to using the script name from the full arguments passed into `.parse()`
// vue: script name is `vue.js`
// this project: script name is cli

program
  .name('vue')
  .version(version)
  .usage('<command> [options]');

// Define a command, implemented using an action handler
// The command description is supplied using .description, not as parameter to .command
// command(nameAndArgs,opts)

// Define a command, implemented in a separate executable file
// The command description is supplied as the second parameter to .command
// command(nameAndArgs,description,opts)
program
  .command('create <app-name>')
  .description('create a new project powered by vue-cli-service')
  .option('-b, --bare', 'create a bare project')
  .action((name, options) => create(options));

program.parse();
