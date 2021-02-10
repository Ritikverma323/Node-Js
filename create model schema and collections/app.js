const express=require('express');
const app= express();
const db=require('./database/databaseConnection')
const Port= process.env.Port || 3000;
const mongoose=require('mongoose');
const adminModel=require('./models/adminModel');
const teacherModel=require('./models/teacherModel');
const classesModel=require('./models/classesModel');
const studentModel=require('./models/studentModel');
app.get('/',(req,res)=>{
    res.send(`connected to ${Port}`);
    console.log("check connection state ",mongoose.connection.readyState);
});

app.listen(Port);