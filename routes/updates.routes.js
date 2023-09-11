import { Router } from 'express'
import { updateEdu, updateExp, updatePro, updateSkill, updateUser } from '../controllers/update.controller.js';

const router = Router();

router.put('/user/:userId', updateUser);

router.put('/education/:userId/:eduId', updateEdu);

router.put('/experience/:userId/:expId', updateExp);

router.put('/project/:userId/:proId', updatePro);

router.put('/skill/:userId/:skillId', updateSkill);

export default router;