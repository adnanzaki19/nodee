const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
	firstname: {
		type: String,
		required: trusted,
		lastname: {
			type: String,
			required: true
		}
	}
});

module.exports = mongoose.model('Employee', employeeSchema)