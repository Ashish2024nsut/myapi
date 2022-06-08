const express = require('express');
const userModel = require('../models/user');

//creating router
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({"message":"you are on the user page"});
})

router.post('/register',(req,res)=>{
    const user = new userModel(req.body);

    user.save().then(()=>{
        res.send({"message":"user created succesfully",
    "user": user});
    }).catch(err=>{
        console.log(`error : ${err.message}`);
        // res.send("error occured creating user");
        res.json({"error": err.message});
    })
});

module.exports = router;