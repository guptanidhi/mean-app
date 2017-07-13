const mongoose = require('mongoose');

// User Model Schema
const RegistrationSchema = new mongoose.Schema({
	email:{
		type: String,
		index: { unique: true }
	},
	password: String,
	firstName: String,
	lastName: String
})

module.exports = mongoose.model('Register', RegistrationSchema);
