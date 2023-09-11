import mongoose from "mongoose";

const ProSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    photo: {
        type: String,
    }
})

export default ProSchema;