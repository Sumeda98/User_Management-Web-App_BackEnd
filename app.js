const express = require("express");
const app = express();
const cors = require("cors");

// ====== middleware ========
app.use(cors()); //unblock connection

app.use(
    express.urlencoded({ //encode data
    extended: true 
})
);

app.use(express.json()); // enable json format


module.exports = app;