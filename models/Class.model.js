const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
	chairs: Number,
	students: Number,
	tables: Number,
});

const Class = mongoose.model('Class', ClassSchema);

module.exports = { Class };
