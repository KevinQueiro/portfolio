import UserSchema from '../models/user.model.js'
import CommentSchema from '../models/Comment.js'

export const getUser = async (req, res) => {
    try {
        const user = await UserSchema.find()
        res.send(user)
    } catch (error) {
        console.error('getUserError', error);
    }
}

export const postComment = async (req, res) => {
    try {
        const newComment = new CommentSchema({
            name: req.body.name,
            comment: req.body.comment
        })
        await newComment.save()
        res.send('done')
    } catch (error) {
        console.error('newCommentsError', error);
    }
}

export const getComments = async (req, res) => {
    try {
        const comments = await CommentSchema.find()
        res.send(comments)
    } catch (error) {
        console.error('getCommentsError', error);
    }
}