const express = require('express');
const mongoose = require('mongoose');
const { Todo } = require('./models/Todo.model');
const cors = require('cors');
const PORT = 4000;
const MONGO_URI = 'mongodb://localhost:27017/DG';
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// GET all todo items in the Database
app.get('/get-todos', async (req, res) => {
	const allTodos = await Todo.find();
	return res.json(allTodos);
});

// Add a new todo item to the collection
app.post('/add-todo', async (req, res) => {
	const { message } = req.body;
	const todo = await Todo.create({ message });
	return res.json(todo);
});

// GET todo by ID
app.get('/get-todo/:id', async (req, res) => {
	const id = req.params.id;
	const todo = await Todo.findById(id);
	return res.json(todo);
});

// Delete todo by ID
app.delete('/delete-todo/:id', async (req, res) => {
	const id = req.params.id;
	await Todo.findByIdAndDelete(id);
	return res.send('Todo deleted');
});

// Update todo by ID
app.put('/update-todo/:id', async (req, res) => {
	const id = req.params.id;
	const { message } = req.body;
	const updateTodo = await Todo.findByIdAndUpdate(id, { message }, { new: true });
	return res.json(updateTodo);
});

const start = () => {
	mongoose.connect(MONGO_URI, (errr) => {
		if (errr) {
			return console.log('Failed to connect to mongoDB');
		}
		console.log('Connected to DB');
	});
	app.listen(4000, () => console.log(`Server running on Port http://localhost:${PORT}`));
};

start();
