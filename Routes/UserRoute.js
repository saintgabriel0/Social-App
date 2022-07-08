import express from 'express';
import { getUser } from '../Controllers/userController.js';

const router = express.Router();

router.get('/:id', getUser)

export default router;