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

const create = async (appName: string, options: CreateOptions) => {
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
  console.log('answer', answer);
  // create project according selection
  const files = glob.sync(path.resolve(TEMPLATE_PATH, './test/**/*'), {
    ignore: ['**/node_modules/**'],
    dot: true
  });
  console.log(chalk.cyan('start create project ....'));
  // write file to pwd
  files.forEach(file => {
    const relativeFilePath = path.relative(path.join(TEMPLATE_PATH, 'test'), file);
    const filePath = path.join(process.cwd(), appName, relativeFilePath);
    const stats = fs.statSync(file);
    if (stats.isFile()) {
      const dirname = path.dirname(filePath);
      const data = fs.readFileSync(file);
      if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
      }
      fs.writeFileSync(filePath, data, { flag: 'w' });
    }
  });
  console.log(chalk.cyan('create project successfully!'));
};

export default create;
