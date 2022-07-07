import inquirer from 'inquirer';
import { cwd } from 'process';
import chalk from 'chalk';
import fs from 'fs';
import glob from 'glob';
import path from 'path';
import { TEMPLATE_PATH } from '../utils/url';
import fse from 'fs/promises';
import { ensureFile } from '../utils/file';
import router from '../plugin/router';
import componentLibrary from '../plugin/componentLibrary';

interface CreateOptions {
  bare?: boolean;
}

interface Answers {
  features: ['router', 'component library'];
}

// Error catch
const create = async (appName: string, options: CreateOptions) => {
  try {
    const { features } = await inquirer.prompt<Answers>({
      type: 'checkbox',
      name: 'features',
      message: 'Please select feature',
      choices: [
        {
          name: 'Router',
          value: 'router',
        },
        {
          name: 'Component library',
          value: 'componentLibrary',
        }
      ]
    });
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
    if (features.includes('router')) {
      // change template file
      router();
    }
    if (features.includes('component library')) {
      componentLibrary();
    }
    console.log(chalk.cyan('create project successfully!'));
  } catch (err) {
    console.log('err', err);
  }
};

export default create;
