const express=require('express');
const router=express.Router();
const adminModel=require('../models/adminModel');

router.get('/',(req,res)=>{
   const search= adminModel.find().then((data)=>{
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

 const dataTosave=new adminModel(newdata);
     
    dataTosave.save();
     res.json(newdata);
   
    
 })

module.exports=router;