import inquirer from 'inquirer';
import { cwd } from 'process';
import chalk from 'chalk';
import fs from 'fs';
import glob from 'glob';
import path from 'path';
import { TEMPLATE_PATH } from '../utils/url';
import fse from 'fs/promises';
import { ensureFile } from '../utils/file';

interface CreateOptions {
  bare?: boolean;
}

const create = async (appName: string, options: CreateOptions) => {
  try {
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
    }).filter(file => {
      const stats = fs.statSync(file);
      return stats.isFile();
    });
    console.log(chalk.cyan('start create project ....'));
    // fixme:
    // 1. extract to semantic method
    // 2. handle path
    // 3. writeFile
    const promises = files.map(file => {
      const relativeFilePath = path.relative(path.join(TEMPLATE_PATH, 'test'), file);
      const filePath = path.join(process.cwd(), appName, relativeFilePath);
      return fse.readFile(file).then((data) => ensureFile(filePath, data));
    });
    await Promise.all(promises);
    console.log(chalk.cyan('create project successfully!'));
  } catch (err) {
    console.log('err', err);
  }
};

export default create;
