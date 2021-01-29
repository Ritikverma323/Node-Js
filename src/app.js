const express= require('express');
const app=express();
var bodyParser = require('body-parser');
require('./db/connection');
const student= require('./model/student')
const PORT=process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.post('/student',(req,res)=>{
   
    const student1= new student(req.body);
    student1.save().then(()=>{
        res.send(student1);
    }).catch((error)=>{
res.send(error);
    })
    console.log(req.body);
//res.send("new connection");

})
app.get('/student',(req,res)=>{
    res.send("new connection2");
    })
app.listen(3000);