const fs = require('fs');
const path = require('path');

const stream = new fs.ReadStream(path.join(__dirname, './text.txt'));

stream.on('readable', function() {
	let readable = stream.read();
	console.log(readable.toString());
});

stream.on('error', function(err) {
	if (err.code == 'ENOENT') {
		console.log("Файл не найден");
	} else {
		console.error(err);
	}
});