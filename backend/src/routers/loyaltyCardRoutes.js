import express from 'express';
import loyaltyCardController from '../controllers/loyaltyCardController.js';

const router = express.Router();

export default router
  .get('/', loyaltyCardController.getLoyaltyCards)
  .get('/:id', loyaltyCardController.getLoyaltyCardById)
  .post('/', loyaltyCardController.saveLoyaltyCard)
  .put('/:id', loyaltyCardController.updateLoyaltyCard)
  .delete('/:id', loyaltyCardController.destroyLoyaltyCard)