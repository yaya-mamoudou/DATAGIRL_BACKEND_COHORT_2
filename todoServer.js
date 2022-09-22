const express = require('express');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
