import express from 'express';
import roleController from '../controllers/roleController.js';

const router = express.Router();

export default router
  .get('/', roleController.getRoles)
  .get('/:id', roleController.getRoleById)
  .post('/', roleController.saveRole)
  .put('/:id', roleController.updateRole)
  .delete('/:id', roleController.destroyRole)