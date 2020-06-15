import { Router } from 'express';
const router = Router();

import { helloWord } from '../controllers/api.controller';

router.route('/').get(helloWord);

export default router;