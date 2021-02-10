// creating Mongoose schema and model

const mongoose=require('mongoose');
const schema=mongoose.Schema;

const studentSchema=new schema({
    subject:{type:String,required:true},
    teacherID:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    classEnroll:[{_id : false,classID:{type:String,required:true},subject:{type:String,required:true},enrollmentId:{type:String,required:true}}]
});

const studentModel=mongoose.model("student",studentSchema);
//  New collection students will be created if it dosn't exist 
module.exports=studentModel;
