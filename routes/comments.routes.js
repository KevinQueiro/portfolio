import {Router} from 'express'
import { postComment, getComments } from '../controllers/others.controller.js';

const router = Router();

router.get('/', getComments)

router.post('/new', postComment)

export default router;