import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    cname: {
        type: String,
        trim: true,
        required: true
    },
    comment: {
        type: String,
        trim: true,
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model('Comment', CommentSchema)
