// creating Mongoose schema and model

const mongoose=require('mongoose');
const schema=mongoose.Schema;

const teacherSchema=new schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    classes:[{ _id:false,classID:{type:String,required:true},subject:{type:String,required:true}}]
});

const teacherModel=mongoose.model("teacher",teacherSchema);
//  New collection teachers will be created if it dosn't exist 
module.exports=teacherModel;
