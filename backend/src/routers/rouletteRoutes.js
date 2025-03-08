import express from 'express';
import rouletteController from '../controllers/rouletteController.js';

const router = express.Router();

export default router
  .get('/', rouletteController.getRoulettes)
  .get('/:id', rouletteController.getRouletteById)
  .post('/', rouletteController.saveRoulette)
  .put('/:id', rouletteController.updateRoulette)
  .delete('/:id', rouletteController.destroyRoulette)