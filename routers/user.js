const express = require('express');
const userModel = require('../models/user');

//creating router
const router = express.Router();

/*
route               '/'
desc                getallusers
access              admin
pramas              none
method              get
*/

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

/*
route               '/register'
desc                registering user
access              public
pramas              none
method              post
*/

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


/*
route               '/:id'
desc                changing the user roll
access              public
pramas              id
method              put
*/
router.put('/:id',async (req,res)=>{
    await userModel.findOneAndUpdate({rollNo : req.params.id},req.body);
    const user = await userModel.find({rollNo : req.body.rollNo});
    res.json({"message" : "user updated","user" : user});
});


/*
route               '/delte/:id'
desc                deleting the user 
access              private
pramas              id
method              delete
*/

router.delete('/delete/:id',async (req,res)=>{
   const user =  await userModel.findOneAndDelete({rollNo : req.params.id});

   if(!user){
        res.json({"message":"user not found"});
   }

   res.json({"message":"user deleted successfully","user":user});
});
module.exports = router;