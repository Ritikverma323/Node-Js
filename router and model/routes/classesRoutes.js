const express=require('express');
const router=express.Router();
const classesModel=require('../models/classesModel');

router.get('/',(req,res)=>{
   const search= classesModel.find().then((data)=>{
    res.json(data);
   });
   
})

router.post('/',(req,res)=>{
    const newdata=req.body;
    console.log(newdata);

    // const newdata={
    //     name:req.body.name,
    //     email:req.body.email,
    //     password:req.body.password
    // }

 const dataTosave=new classesModel(newdata);
     
    dataTosave.save();
     res.json(newdata);
   
    
 })

module.exports=router;