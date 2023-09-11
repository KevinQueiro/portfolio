import { Router } from 'express'
import { postEdu, postExp, postPro, postSkill, postUser } from '../controllers/news.controller.js';

const router = Router();

router.post('/user', postUser);

router.post('/education/:userId', postEdu);

router.post('/experience/:userId', postExp);

router.post('/project/:userId', postPro);

router.post('/skill/:userId', postSkill);

export default router;