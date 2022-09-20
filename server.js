const express = require('express');
const mongoose = require('mongoose');
const { Class } = require('./models/Class.model');

const app = express();
const MONGO_URI = 'mongodb://localhost:27017/DG';
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/classes', async (req, res) => {
	const listOfClasses = await Class.find();
	return res.send(listOfClasses);
});

app.post('/class', async (req, res) => {
	const { chairs, tables, students } = req.body;

	const newClass = await Class.create({ chairs, tables, students });

	return res.send(newClass);
});

const start = () => {
	mongoose.connect(MONGO_URI, (errr) => {
		if (errr) {
			return console.log('Failed to connect to mongoDB');
		}
		console.log('Connected to DB');
	});
	app.listen(4000, () => console.log(`Server running on Port ${PORT}`));
};

start();
