import inquirer, { prompts } from 'inquirer';
import { cwd } from 'process';

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

};

export default create;
