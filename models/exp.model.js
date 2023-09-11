import mongoose from "mongoose";

const ExpSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    initdate: {
        type: Date,
    },
    finaldate: {
        type: Date,
    },
    description: {
        type: String,
        trim: true
    },
    photo: {
        type: String
    }
})

export default ExpSchema;