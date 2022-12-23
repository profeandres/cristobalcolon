import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async ()=>{
    try {
        mongoose.set('strictQuery', true)
        const db = await mongoose.connect(MONGODB_URI);
        console.log("db is connected to ",db.connection.name)
    } catch (error) {
        console.log(error);
    }   
}
