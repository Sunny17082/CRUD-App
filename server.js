const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const bodypraser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("CRUD Application");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});