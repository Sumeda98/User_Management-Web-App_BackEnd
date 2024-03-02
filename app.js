const express = require("express");
const app = express();
const cors = require("cors");
const controller = require('./controller')

// ====== middleware ========
app.use(cors()); //unblock connection

app.use(
    express.urlencoded({ //encode data
    extended: true 
})
);

app.use(express.json()); // enable json format


//=============REST-Api================


//=====get-all-users=========
app.get('/users', (req,res) => {
    controller.getUsers(users => {
        res.send(users);
    })
})

//============get-user-by-id=========
app.get('/user', (req,res) => {
    const id = req.query.id;
    controller.getUserById(id, user => {
        res.send(user);
    })
})

module.exports = app;