import mongoose from "mongoose";

export const connectToDB = async()=> {
    const mongoURI = process.env.MONGOURI;
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB Successfully");
    }catch(e) {
        console.log(`failed to connect to mongoDB: ${e}`);
        process.exit(1);
    }
}