const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(5000, () => {
    console.log("Server Run on PORT: 5000");
});