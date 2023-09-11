import mongoose from "mongoose";

const EduSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
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

export default EduSchema;