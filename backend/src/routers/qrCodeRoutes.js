import express from 'express';
import upload from '../multer/upload.js';
import qrCodeController from '../controllers/qrCodeController.js';

const router = express.Router();

export default router
  .get('/', qrCodeController.getQrCodes)
  .get('/:id', qrCodeController.getQrCodeById)
  .post('/', upload.single('image'), qrCodeController.saveQrCode)
  .put('/:id', upload.single('image'), qrCodeController.updateQrCode)
  .delete('/:id', qrCodeController.destroyQrCode)