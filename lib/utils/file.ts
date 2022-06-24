import fsp from 'fs/promises';
import { Mode, ObjectEncodingOptions, OpenMode, PathLike } from 'node:fs';
import { Stream } from 'node:stream';
import { Abortable } from 'node:events';
import path from 'path';
import fs from 'fs';

type Data =
  string
  | NodeJS.ArrayBufferView
  | Iterable<string | NodeJS.ArrayBufferView>
  | AsyncIterable<string | NodeJS.ArrayBufferView>
  | Stream

type Options = | (ObjectEncodingOptions & {
  mode?: Mode | undefined;
  flag?: OpenMode | undefined;
} & Abortable)
  | BufferEncoding
  | null

export const ensureFile = (file: string, data: Data, options?: Options) => {
  const dirname = path.dirname(file);
  if (!fs.existsSync(dirname)) {
    return fsp.mkdir(dirname, { recursive: true })
      .then(() => fsp.writeFile(file, data, options));
  }
  return fsp.writeFile(file, data, options);
};
