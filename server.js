const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("CRUD Application");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});