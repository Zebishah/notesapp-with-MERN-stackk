const mongoose=require('mongoose');
const mongo_URI="mongodb://127.0.0.1:27017/Inotebook";

const connectDB=async()=>{
    await mongoose.connect(mongo_URI).then((result) => {
        console.log("Database is connected on Connection String "+mongo_URI);
    }).catch((err) => {
        console.log("Database is not connected we got an error  "+err);
    });
}
module.exports=connectDB