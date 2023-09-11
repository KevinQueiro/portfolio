import { Router } from 'express'
import newsRoutes from './news.routes.js'
import deletesRoutes from './deletes.routes.js'
import updatesRoutes from './updates.routes.js';
import { getUser } from '../controllers/news.controller.js';

const router = Router();

router.use('/new', newsRoutes);

router.use('/delete', deletesRoutes);

router.use('/update', updatesRoutes);

router.get('/', getUser);

export default router;