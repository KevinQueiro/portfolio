import mongoose from "mongoose";

export async function connctToDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/portfolio')
        console.log('database conected');
    } catch (error) {
        console.error(error)
    }
}