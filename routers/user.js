const express = require('express');
const userModel = require('../models/user');

//creating router
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({"message":"you are on the user page"});
})

router.post('/register',(req,res)=>{
    const user = new userModel(req.body);

    console.log(user.name);
    user.save().then(()=>{
        res.send({"message":"user created successfully","user" :`${user}`});
    }).catch(err=>{
        console.log({"error" : err.message});
        res.send({"error":err.message});
    })
    return ;   
});

module.exports = router;