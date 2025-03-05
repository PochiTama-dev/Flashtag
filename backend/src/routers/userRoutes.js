import express from 'express';
import upload from '../multer/upload.js';
import userController from '../controllers/userController.js';

const router = express.Router();

export default router
  .get('/', userController.getUsers)
  .get('/:id', userController.getUserById)
  .get('/email/:email', userController.getUserByEmail)
  .post('/login', userController.loginUser)
  .post('/', upload.single('avatar'), userController.saveUser)
  .put('/:id', upload.single('avatar'), userController.updateUser)
  .delete('/:id', userController.destroyUser)