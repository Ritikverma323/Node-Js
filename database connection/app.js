const express=require('express');
const app= express();
const db=require('./database/databaseConnection')
const Port= process.env.Port || 3000;
const mongoose=require('mongoose');
app.get('/',(req,res)=>{
    res.send(`connected to ${Port}`);
    console.log("check connection state ",mongoose.connection.readyState);
});

app.listen(Port);