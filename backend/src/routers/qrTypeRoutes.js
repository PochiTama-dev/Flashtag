import express from 'express';
import qrTypeController from '../controllers/qrTypeController.js';

const router = express.Router();

export default router
  .get('/', qrTypeController.getQrTypes)
  .get('/:id', qrTypeController.getQrTypeById)
  .post('/', qrTypeController.saveQrType)
  .put('/:id', qrTypeController.updateQrType)
  .delete('/:id', qrTypeController.destroyQrType)