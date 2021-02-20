import express from 'express';
import { getMobile, addMobile } from '../controllers/mobile.js';

const router = express.Router();

router.get('/', getMobile);

router.post('/', addMobile);

export default router;