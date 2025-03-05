import express from 'express';
import rouletteConfigController from '../controllers/rouletteConfigController.js';

const router = express.Router();

export default router
  .get('/', rouletteConfigController.getConfigs)
  .get('/:id', rouletteConfigController.getConfigById)
  .get('/roulette/:id', rouletteConfigController.getConfigByRouletteId)
  .post('/', rouletteConfigController.saveConfig)
  .put('/:id', rouletteConfigController.updateConfig)
  .delete('/:id', rouletteConfigController.destroyConfig)