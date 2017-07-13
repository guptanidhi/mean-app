const mongoose = require('mongoose');

// User Model Schema
const MovieSchema = new mongoose.Schema({
	id:{
		type: String,
		index: { unique: true }
	},
	title: String,
	vote_average: String,
	poster_path: String
})

module.exports = mongoose.model('Movie', MovieSchema);
