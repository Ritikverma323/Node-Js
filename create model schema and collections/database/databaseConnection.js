const mongoose=require('mongoose');
const connectionString="mongodb+srv://root:root@cluster0.qyrac.mongodb.net/classmanagement-api?retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
   
  };



  mongoose.connect(connectionString, options).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */  console.log("connected to database")},
    error => { /** handle initial connection error */ console.log(error) }
  );

