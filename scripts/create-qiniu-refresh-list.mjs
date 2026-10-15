import { readFileSync, writeFileSync } from 'node:fs';

const [inputFile, outputFile] = process.argv.slice(2);
const origin = process.env.QINIU_CDN_ORIGIN?.replace(/\/+$/, '');

if (!inputFile || !outputFile || !origin || !/^https?:\/\//.test(origin)) {
  throw new Error('Usage: QINIU_CDN_ORIGIN=https://example.com node scripts/create-qiniu-refresh-list.mjs <overwrite-list> <output>');
}

const urls = new Set();

for (const result of readFileSync(inputFile, 'utf8').split(/\r?\n/)) {
  if (!result.trim()) continue;

  // qshell writes relative-path<TAB>file-size<TAB>modified-time.
  const objectKey = result.split('\t', 1)[0].replaceAll('\\', '/').replace(/^\/+/, '');
  const publicKey = objectKey.endsWith('index.html')
    ? objectKey.slice(0, -'index.html'.length)
    : objectKey;
  const encodedPath = publicKey.split('/').map(encodeURIComponent).join('/');
  urls.add(`${origin}/${encodedPath}`);
}

writeFileSync(outputFile, `${[...urls].sort().join('\n')}${urls.size ? '\n' : ''}`);
console.log(`Prepared ${urls.size} changed CDN URL(s) for refresh.`);
