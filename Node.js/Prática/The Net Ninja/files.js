const fs = require('fs');


// Reading files
fs.readFile('./docs/text1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// Writing files
fs.writeFile('./docs/text1.txt', 'Hello world', () => {
  console.log('file was written');
});

fs.writeFile('./docs/text2.txt', 'Hello again', () => {
  console.log('file was written');
});

// Directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
	// Remove directory if already exists
	fs.rmdir('./assets', (err) => {
		if (err) {
			console.log(err);
		}
		console.log('folder deleted');
	})
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  })
}