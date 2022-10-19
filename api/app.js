// app.js - файл для відображення повідомлення "Hello World"
// чи даних про студента
// Велігорський Б.О., КІ-191

require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {

    res.send("Hello World");
});

app.get("/user", (req, res) => {

    res.send({name: process.env.NAME, surname: process.env.SURNAME,
     age: process.env.AGE, group: process.env.GROUP
    });
});

app.listen(3000);
