import inquirer from 'inquirer';

const router = async () => {
  try {
    const isHistoryMode = await inquirer.prompt({
      type: 'confirm',
      name: 'routerMode',
      message: 'Use history mode for router ?'
    });
    if (isHistoryMode) {

    }
  } catch (error) {
    console.log(error);
  }
};

export default router;
