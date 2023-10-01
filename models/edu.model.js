import mongoose from "mongoose";

const EduSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
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

export default EduSchema;