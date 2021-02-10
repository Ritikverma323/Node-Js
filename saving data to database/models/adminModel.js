// creating Mongoose schema and model

const mongoose=require('mongoose');
const schema=mongoose.Schema;

const adminSchema=new schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

const adminModel=mongoose.model("admin",adminSchema);
//  New collection admins will be created if it dosn't exist 
module.exports=adminModel;
