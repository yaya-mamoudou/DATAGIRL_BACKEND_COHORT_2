const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	message: String,
});

const TodoModel = mongoose.model('todos', TodoSchema);

module.exports = { Todo: TodoModel };
