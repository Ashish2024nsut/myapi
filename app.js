const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//connecting databse:
mongoose.connect(`${process.env.MONGO_URL}`).then(()=>{
    console.log("database connection successfull😎!!");
}).catch(err=>{
    console.log({"err":err.message});
})


//router
const home = require('./routers/home');


//configuring routers
app.use('/home',home);

app.get('/',(req,res)=>{
    res.send("express app is active now");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running now on port ${PORT}🚀`);
});