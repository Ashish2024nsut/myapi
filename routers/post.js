const express = require('express');
const postModel = require('../models/post');
const router = express.Router();

/*
route           '/'
desc            get all posts
access          public
params          none
method          get
*/

router.get('/',async (req,res)=>{
    const posts = await postModel.find({},(err,data)=>{
        if(err){
            console.log(err.message);
        }
        return data;
    });
    
    res.json({"message":"all the posts created till data are:","posts": posts});

});

/*
route           '/'
desc            get all posts
access          public
params          none
query           ?id=$creatorId
method          get
*/

router.get('/',async (req,res)=>{
    const creatorId = req.query.id;

    const posts = await postModel.find({creator : creatorId});
    if(posts.length==0){
        res.json({"message" : "no posts found"});
    }
    res.json({"message":"your posts are:","posts" : posts});
})


module.exports = router;