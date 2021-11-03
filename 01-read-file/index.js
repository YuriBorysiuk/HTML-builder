const fs = require('fs');

const stream = new fs.ReadStream(__dirname);

stream.on('readable', function() {
	let data = stream.read();
	console.log(data.toString());
});

stream.on('error', function(err) {
	if (err.code == 'ENOENT') {
		console.log("Файл не найден");
	} else {
		console.error(err);
	}
});