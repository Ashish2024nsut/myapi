const express = require('express');
const userModel = require('../models/user');

//creating router
const router = express.Router();

router.get('/',async (req,res)=>{
    const users = await userModel.find();
    res.json({"message":"the users registered are: ",
users : users});
})

/*
route               '/:id'
desc                getting specific user by id
access              admin
pramas              id
method              get
*/

router.get('/:id', async(req,res)=>{
    const getspecificuser = await userModel.find({rollNo : parseInt(req.params.id)});
    if(!getspecificuser){
        res.json({"message": `no user exists with id : ${req.params.id}`});
    }
    console.log(getspecificuser);
    res.json({"message" : "user found",
    "user" : getspecificuser});
});

router.post('/register', async (req,res)=>{
    const user = new userModel(req.body);

    const checkuser = await userModel.find({rollNo : req.body.rollNo});

    if(checkuser.length != 0){
        console.log(checkuser);
        res.json({"message": "user already exists"});
        return ;
    }
    await user.save().then(()=>{
        res.send({"message":"user created succesfully",
    "user": user});
    }).catch(err=>{
        console.log(`error : ${err.message}`);
        // res.send("error occured creating user");
        res.json({"error": err.message});
    })
});

module.exports = router;