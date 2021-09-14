const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name: {type: String, required: true},
    surname: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String}
})

module.exports = model('User', userSchema);