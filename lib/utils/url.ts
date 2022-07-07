import path from 'path';
import process from 'process';

export const APP_ROOT_PATH = path.resolve(__dirname, '../../../');

export const TEMPLATE_PATH = path.resolve(APP_ROOT_PATH, './templates');
export const PROJECT_ROOT = process.cwd();
