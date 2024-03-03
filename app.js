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
    controller.getUsers(req, rest, next => {
        res.send(); 
    })
})

//============create-user=========
app.post('/createuser', (req,res) => {
    const id = req.query.id;
    controller.addUser(req.body, (callback) => { 
        req.send()
    })
});


//============update-user=========
app.put('/updateuser', (req,res) => {
    const id = req.query.id;
    controller.updateUser(req.body, (callack) => { 
        req.send(callack)
    })
});

//============delete-user=========
app.delete('/deleteuser', (req,res) => {
    const id = req.query.id;
    controller.deleteUser(req.body, (callack) => { 
        req.send(callack)
    })
});



module.exports = app;