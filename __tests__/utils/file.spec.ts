import os from 'os';
import path from 'path';
import fsp from 'fs/promises';
import { ensureFile } from '../../lib/utils/file';
import fs from 'fs';

describe('Utils:file', () => {
  let TEST_DIR: string;
  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'file');
    return fsp.mkdir(TEST_DIR, { recursive: true });
  });
  afterEach(() => {
    return fsp.rm(TEST_DIR, { recursive: true, force: true });
  });
  describe('ensureFile', () => {
    it('should create parent directory which not exists', async () => {
      const filePath = path.resolve(TEST_DIR, 'a/b/c/d.txt');
      const data = 'test';
      expect(fs.existsSync(filePath)).toBe(false);
      await ensureFile(filePath, data);
      expect(fs.existsSync(filePath)).toBe(true);
      const fileContent = await fsp.readFile(filePath, 'utf-8');
      expect(data).toBe(fileContent);
    });
  });
});
