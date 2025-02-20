import express from 'express';
import wifiController from '../controllers/wifiController.js';

const router = express.Router();

export default router
  .get('/', wifiController.getWifis)
  .get('/:id', wifiController.getWifiById)
  .post('/', wifiController.saveWifi)
  .put('/:id', wifiController.updateWifi)
  .delete('/:id', wifiController.destroyWifi)