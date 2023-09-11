import UserSchema from '../models/user.model.js'

export const getUser = async(req, res) => {
    try {
        const user = await UserSchema.find()
        res.send(user)
    } catch (error) {
        console.error(error);
    }
}

export const postUser = async(req, res) => {
    console.log(req.body);
    try {
        const newUser = new UserSchema({
            name: req.body.name,
            lastname: req.body.lastname,
            photo: req.body.photo,
            title: req.body.title,
            birthdate: new Date (req.body.birthdate)
        })
        await newUser.save();
        res.send('done')
    } catch (error) {
        console.error(error)
    }
}

export const postEdu = async(req, res) => {
        try {
           const currentUser = await UserSchema.findById(req.params.userId);
            const newEdu = {
            name: req.body.name,
            initdate: new Date (req.body.initdate),
            finaldate: new Date (req.body.finaldate),
            description: req.body.description,
            photo: req.body.photo
          }
          currentUser.educations.push(newEdu);
          await currentUser.save();
            res.send('done')
        } catch (error) {
            console.error(error);
        }
}

export const postExp = async(req, res) => {
    try {
       const currentUser = await UserSchema.findById(req.params.userId);
        const newExp = {
        name: req.body.name,
        initdate: new Date (req.body.initdate),
        finaldate: new Date (req.body.finaldate),
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

export const postPro = async(req, res) => {
    try {
       const currentUser = await UserSchema.findById(req.params.userId);
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

export const postSkill = async(req, res) => {
    try {
       const currentUser = await UserSchema.findById(req.params.userId);
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