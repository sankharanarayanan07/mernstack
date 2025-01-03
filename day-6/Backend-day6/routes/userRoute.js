import express from 'express';
import { fetch,create,update, deleteUser, specUser } from '../controller/userController.js';
const router = express.Router();

router.get('/fetch', fetch)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteUser)
router.get('/specUser/:id', specUser)

export default router;  
