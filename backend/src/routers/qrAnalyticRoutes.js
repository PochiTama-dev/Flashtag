import express from 'express';
import qrAnalyticController from '../controllers/qrAnalyticController.js';

const router = express.Router();

export default router
  .get('/', qrAnalyticController.getQrAnalytics)
  .get('/:id', qrAnalyticController.getQrAnalyticById)
  .get('/qr_code/:id', qrAnalyticController.getQrAnalyticByQrCode)
  .post('/', qrAnalyticController.saveQrAnalytic)
  .put('/:id', qrAnalyticController.updateQrAnalytic)
  .delete('/:id', qrAnalyticController.destroyQrAnalytic)