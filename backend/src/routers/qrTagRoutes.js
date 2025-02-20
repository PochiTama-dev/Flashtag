import express from 'express';
import qrTagController from '../controllers/qrTagController.js';

const router = express.Router();

export default router
  .get('/', qrTagController.getQrTags)
  .get('/:id', qrTagController.getQrTagById)
  .post('/', qrTagController.saveQrTag)
  .put('/:id', qrTagController.updateQrTag)
  .delete('/:id', qrTagController.destroyQrTag)