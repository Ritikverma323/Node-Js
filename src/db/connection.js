const mongoose =require('mongoose');
mongoose.set('useCreateIndex', true);
const connection=mongoose.connect("mongodb://localhost:27017/studentsapi",{ useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect("mongodb://localhost:27017/YOURDB", { useNewUrlParser: true, useUnifiedTopology: true });
//studentapi database will be crated 
// connection is promise
connection.then(()=>{
    console.log("connection is successful");
}).catch((error)=>{
    console.log(error);
});
