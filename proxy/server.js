// основний текст застосування 'proxy'
// Велігорський Б.О., КІ-191

require('dotenv').config();
const express = require("express");
const axios = require('axios');
const config = require('./config.js');
const app = express();

// для запиту до застосування 'api' за портом 3000
// використовуємо axios і його метод get
axios.get(process.env.URL)
	.then(response => {
		const headerData = response.headers && response.headers.date ? response.headers.date : 'no response date';
		console.log('Status code:', response.status);
		console.log("Received message: ", response.data);
	}).catch(err => {
		console.log('Error: ', err.message);
	});

// звернення за адресою localhost:3001 створить запит
// до застосування 'api' (localhost:3000)
app.get("/", async (req, res) => {
	try {
		response = await axios.get(process.env.URL);
		res.send(response.data);
	} catch (error) {
		console.log(error);
	}
});

module.exports = app;