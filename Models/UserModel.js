const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	name: String,
	phone_number: Number,
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };

// id,name,phone_number
