import mongoose from "mongoose";
import EduSchema from "./edu.model.js";
import ExpSchema from "./exp.model.js";
import ProSchema from "./pro.model.js";
import SkillSchema from "./skill.model.js";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    photo: {
        type: String
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    experiences: [ExpSchema],
    educations: [EduSchema],
    skills:[SkillSchema],
    projects:[ProSchema]
})

export default mongoose.model('user', UserSchema)
