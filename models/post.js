const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    creator:    {
        type: Number,
        required: "creator is required",
    },
    desc  :{
        type : String,
        minlength : 10,
        maxlength : 200
    }
});

module.exports = mongoose.model('Post',postSchema);