// creating Mongoose schema and model

const mongoose=require('mongoose');
const schema=mongoose.Schema;

const classSchema=new schema({
    subject:{type:String,required:true},
    teacherID:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    students:[{_id : false,studentID:{type:String,required:true},subject:{type:String,required:true}}]
});

const classesModel=mongoose.model("classes",classSchema);
//  New collection classes will be created if it dosn't exist 
module.exports=classesModel;
