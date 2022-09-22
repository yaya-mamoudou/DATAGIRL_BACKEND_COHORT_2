const express = require('express');
const mongoose = require('mongoose');
const { Class } = require('./models/Class.model');

const app = express();
const MONGO_URI = 'mongodb://localhost:27017/DG';
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded());
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
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
