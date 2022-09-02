const express = require('express');

const app = express();
const PORT = 4000;

let users = [
	{ id: 1, name: 'Yaya', age: 25 },
	{ id: 2, name: 'Carl', age: 22 }, //2
];
app.use(express.json());

app.get('/users', (req, res) => {
	return res.status(200).send(users);
});

app.post('/create-user', (req, res) => {
	const { name, age } = req.body;
	users.push({ id: users.length + 1, name, age });
	return res.status(200).send(users);
});

app.put('/update-user/:id', (req, res) => {
	const { id } = req.params; // 2
	// req.body = {name:'',age:""}

	const userIndex = users.findIndex((u) => u.id == id); //2

	let newValue = users[userIndex]; // { id: 2, name: 'Carl', age: 22 },
	newValue = { ...newValue, ...req.body }; // { id: 2, name:"", age:"" }

	users[userIndex] = newValue;

	// [
	// { id: 1, name: 'Yaya', age: 25 },
	// { id: 2, name:"", age:"" }
	// ]

	return res.status(200).send(users);
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

// GET
// POST
// PUT
// DELETE
