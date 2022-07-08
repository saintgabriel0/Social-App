import express from 'express';
import { getUser, updateUser } from '../Controllers/userController.js';

const router = express.Router();

router.get('/user/:id', getUser)
router.put('/user/:id', updateUser)

export default router;