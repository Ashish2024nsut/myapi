const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        // required: true,
        minlength: 10,
        maxlength: 30
    },
    email : {
        type: String,
        // required: true
    }
});

module.exports = mongoose.model('User',userSchema);