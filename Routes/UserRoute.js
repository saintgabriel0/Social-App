import express from 'express';
import { getUser } from '../Controllers/userController.js';

const router = express.Router();

router.get('/user/:id', getUser)

export default router;