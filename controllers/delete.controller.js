import UserSchema from '../models/user.model.js'
import access from '../utils/access.js'
import { handleError } from '../utils/hadleError.js'

export const deleteEdu = async(req, res) => {
    try {
        const user = await UserSchema.findById(req.params.userId)
        await access(req.body.password, user.password, res.send)
        const eduIndex = user.educations.findIndex(edu => edu.id === req.params.eduId);
        if(eduIndex === -1){
            res.send('no se encuentra la educacion')
        } else {
            user.educations.splice(eduIndex, 1);
        }
        await user.save();
        res.send('deleted')
    } catch (error) {
        handleError(error, res);
    }
}

export const deleteExp = async(req, res) => {
    try {
        const user = await UserSchema.findById(req.params.userId)
        await access(req.body.password, user.password, res.send)
        const expIndex = user.experiences.findIndex(edu => edu.id === req.params.expId);
        if(expIndex === -1){
            res.send('no se encuentra la experiencia')
        } else {
            user.experiences.splice(expIndex, 1);
        }
        await user.save();
        res.send('deleted')
    } catch (error) {
        handleError(error, res);
    }
}

export const deletePro = async(req, res) => {
    try {
        const user = await UserSchema.findById(req.params.userId)
        await access(req.body.password, user.password, res.send)
        const proIndex = user.projects.findIndex(edu => edu.id === req.params.proId);
        if(proIndex === -1){
            res.send('no se encuentra el proyecto')
        } else {
            user.projects.splice(proIndex, 1);
        }
        await user.save();
        res.send('deleted')
    } catch (error) {
        handleError(error, res);
    }
}

export const deleteSkill = async(req, res) => {
    try {
        const user = await UserSchema.findById(req.params.userId)
        await access(req.body.password, user.password, res.send)
        const skillIndex = user.skills.findIndex(edu => edu.id === req.params.skillId);
        if(skillIndex === -1){
            res.send('no se encuentra la habilidad')
        } else {
            user.skills.splice(skillIndex, 1);
        }
        await user.save();
        res.send('deleted')
    } catch (error) {
        handleError(error, res);
    }
}

export const deleteUser = async(req, res) => {
    try {
        const user = await UserSchema.findById(req.params.userId)
        await access(req.body.password, user.password, res.send)
        await UserSchema.findByIdAndDelete(req.params.userId)
        res.send('deleted')
    } catch (error) {
        handleError(error, res);
    }
}