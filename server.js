const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const host = 'localhost'
const mongoose = require('mongoose')
const router = require('./router')


// ====== middleware ========
app.use(cors()); //unblock connection
app.use(express.json()); // enable json format
app.use('/api',router) //router

const uri ='mongodb+srv://ssbsankalpa:ssbsankalpaUserM123@cluster0.lk7dqxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error) {
        console.log('MongoDB Error', error);
    }
}

connect();

const server = app.listen(port, host, ()=>{
    console.log(`Node Server is listening to ${server.address().port}`)
}) // setup port