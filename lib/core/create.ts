import inquirer from 'inquirer';
import { cwd } from 'process';
import chalk from 'chalk';
import fs from 'fs';
import glob from 'glob';
import path from 'path';

console.log('meta', import.meta);

interface CreateOptions {
  bare?: boolean;
}

const create = async (options: CreateOptions) => {
  const answer = await inquirer.prompt({
    type: 'checkbox',
    name: 'feature',
    message: 'Please select feature',
    choices: [
      {
        name: 'Babel',
        value: 'babel',
      },
      {
        name: 'TypeScript',
        value: 'typescript',
      }
    ]
  });
  // create project according selection
  console.log(chalk.cyan('start create project ....'));
  const files = glob.sync(path.resolve(__dirname, 'templates/test/*'));
  console.log('files', files);
};

export default create;
