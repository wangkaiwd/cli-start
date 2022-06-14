import inquirer from 'inquirer';

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
        short: 'bl'
      },
      {
        name: 'TypeScript',
        value: 'typescript',
        short: 'ts'
      }
    ]
  });
};

export default create;
