const mongoose = require('mongoose');

module.exports.connect = (url) => {
	mongoose.connect(url);

	// plug in the promise library:
  mongoose.Promise = global.Promise;

	mongoose.connection.on('error', (err) => {
		console.log(`Mongoose connection error: ${err}`);
		process.exit(1);
	});
}
