import mongoose from "mongoose";

const connectDb = async(req,res)=>{
    try {
        mongoose.connect(process.env.MONGODB_URL,{dbName:"admin"})
        console.log("Database is Connected");
        
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDb;