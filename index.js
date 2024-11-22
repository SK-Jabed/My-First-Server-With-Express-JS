const express = require("express");
const cors = require("cors");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from my first ever server");
})

app.get("/data", (req, res) => {
    res.send("More data will be added soon")
})

app.get("/phones", (req, res) => {
    res.send(phones);
})

app.get("/phones/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log("I need data for id: ", id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})

app.listen(port, () => {
    console.log(`My first server is running on port: ${port}`);
})