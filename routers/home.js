const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({"message":"you are on the home page"});
})

module.exports = router;