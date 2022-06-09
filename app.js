const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
dotenv.config();

//connecting databse:
mongoose.connect(`${process.env.MONGO_URL}`).then(()=>{
    console.log("database connection successfull😎!!");
}).catch(err=>{
    console.log({"err":err.message});
})


//router
const user = require('./routers/user');
const post = require('./routers/post');

//configuring routers
// app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use('/user',user);
app.use('/post',post);

app.get('/',(req,res)=>{
    res.send("express app is active now");
});




const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running now on port ${PORT}🚀`);
});