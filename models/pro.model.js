import mongoose from "mongoose";

const ProSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    photo: {
        type: String,
    }
})

export default ProSchema;