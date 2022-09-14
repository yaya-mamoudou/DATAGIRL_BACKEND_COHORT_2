const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./Models/UserModel');

const app = express();
const MONGO_URI = 'mongodb://localhost:27017/DG';
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/users', async (req, res) => {
	const allUsers = await User.find();
	res.send(allUsers);
});

app.post('/add-user', async (req, res) => {
	const { name, phone_number } = req.body;
	const checkUser = await User.find({ phone_number });

	if (checkUser.length > 0) {
		return res.status(422).send('User already exist');
	}

	const user = await User.create({ name, phone_number });

	res.send(user);
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
