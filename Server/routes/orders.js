import express from 'express';
import { orders } from '../controllers/orders.js';

const router = express.Router();

router.post('/', orders);

export default router;