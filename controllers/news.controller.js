import UserSchema from '../models/user.model.js'
import bcrypt from 'bcrypt';
import access from '../utils/access.js';
import { handleError } from '../utils/hadleError.js';

export const postUser = async (req, res) => {
    try {
        const newUser = new UserSchema({
            name: req.body.name,
            lastname: req.body.lastname,
            photo: req.body.photo,
            title: req.body.title,
            birthdate: new Date(req.body.birthdate),
            password: await bcrypt.hash(req.body.password, 10)
        });
        await newUser.save();
        res.send('done')
    } catch (error) {
        handleError(error, res);
    }
}

export const postEdu = async (req, res) => {
    try {
        const currentUser = await UserSchema.findById(req.params.userId);
        await access(req.body.password, currentUser.password, res.send)
        const newEdu = {
            name: req.body.name,
            initdate: new Date(req.body.initdate),
            finaldate: new Date(req.body.finaldate),
            description: req.body.description,
            photo: req.body.photo
        }
        currentUser.educations.push(newEdu);
        await currentUser.save()
        res.send('done')
    } catch (error) {
        console.log('------------ERROR--------', error);
        console.error(error);
        handleError(error, res);
    }
}

export const postExp = async (req, res) => {
    try {
        const currentUser = await UserSchema.findById(req.params.userId);
        await access(req.body.password, currentUser.password, res.send)
        const newExp = {
            name: req.body.name,
            initdate: new Date(req.body.initdate),
            finaldate: new Date(req.body.finaldate),
            description: req.body.description,
            photo: req.body.photo
        }
        currentUser.experiences.push(newExp);
        await currentUser.save();
        res.send('done')
    } catch (error) {
        console.error(error);
    }
}

export const postPro = async (req, res) => {
    try {
        const currentUser = await UserSchema.findById(req.params.userId);
        await access(req.body.password, currentUser.password, res.send)
        const newPro = {
            name: req.body.name,
            description: req.body.description,
            photo: req.body.photo
        }
        currentUser.projects.push(newPro);
        await currentUser.save();
        res.send('done')
    } catch (error) {
        console.error(error);
    }
}

export const postSkill = async (req, res) => {
    try {
        const currentUser = await UserSchema.findById(req.params.userId);
        await access(req.body.password, currentUser.password, res.send)
        const newSkill = {
            name: req.body.name,
            percentage: req.body.percentage
        }
        currentUser.skills.push(newSkill);
        await currentUser.save();
        res.send('done')
    } catch (error) {
        console.error(error);
    }
}