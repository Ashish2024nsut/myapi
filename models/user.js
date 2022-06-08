const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: "name is required",
        minlength: 5,
        maxlength: 30
    },
    email : {
        type: String,
        required: "email is required",
        minlength:12
    },
    rollNo: {
        type : Number,
        required: "roll is required",
        minlength:12,
        maxlength:12
    }
});

module.exports = mongoose.model('User',userSchema);