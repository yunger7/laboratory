const fs = require('fs');

const readStream = fs.createReadStream('./docs/bigtext.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/writeme.txt');

readStream.on('data', (chunk) => {
  console.log('----- NEW CHUNK -----');
  console.log(chunk);
  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
});

// Piping
readStream.pipe(writeStream);