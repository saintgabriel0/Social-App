import express from 'express';
import { deleteUser, getUser, updateUser } from '../Controllers/userController.js';

const router = express.Router();

router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;