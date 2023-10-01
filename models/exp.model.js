import mongoose from "mongoose";

const ExpSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    initdate: {
        type: Date,
        required: true
    },
    finaldate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    photo: {
        type: String
    }
})

export default ExpSchema;