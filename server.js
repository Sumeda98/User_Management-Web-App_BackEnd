const app = require('./app'); // initiate app.js
const port = 3001;
const host = '127.0.0.1'

const server = app.listen(port, host, ()=>{
    console.log(`Node Server is listening to ${server.address().port}`)
}) // setup port