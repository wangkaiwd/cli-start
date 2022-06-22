import inquirer from 'inquirer';
import { cwd } from 'process';
import chalk from 'chalk';
import fs from 'fs';
import glob from 'glob';
import path from 'path';
import { TEMPLATE_PATH } from '../utils/url';

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
  const files = glob.sync(path.resolve(TEMPLATE_PATH, './test/**/*'), {
    ignore: ['**/node_modules/**'],
    dot: true
  });
  console.log(chalk.cyan('start create project ....'));
  // write file to pwd
  files.forEach(file => {
    const relativeFilePath = path.relative(file, path.join(TEMPLATE_PATH, 'test'));
    const filePath = path.join(process.cwd(), relativeFilePath);
    const stats = fs.statSync(file);
    if (stats.isFile()) {
      const data = fs.readFileSync(file);
      console.log('filePath', relativeFilePath);
      // fs.writeFileSync(filePath, data);
    }
  });
  console.log(chalk.cyan('create project successfully!'));
};

export default create;
