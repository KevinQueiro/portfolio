import { Router } from 'express'
import { deleteEdu, deleteExp, deletePro, deleteSkill, deleteUser } from '../controllers/delete.controller.js';

const router = Router();

router.delete('/user/:userId', deleteUser);

router.delete('/education/:userId/:eduId', deleteEdu);

router.delete('/experience/:userId/:expId', deleteExp);

router.delete('/project/:userId/:proId', deletePro);

router.delete('/skill/:userId/:skillId', deleteSkill);

export default router;