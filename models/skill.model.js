import mongoose from "mongoose";

const SkillSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }
})

export default SkillSchema;