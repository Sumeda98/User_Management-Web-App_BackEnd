const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//=======Create-Schema-model==========
const userSchema = new Schema({
    id:Number,
    name:String,
});

//=====assign-user-model=======
const User = mongoose.model('user', userSchema);

//===Export-model---
module.exports = User;