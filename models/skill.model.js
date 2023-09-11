import mongoose from "mongoose";

const SkillSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    percentage: {
        type: Number,
    }
})

export default SkillSchema;