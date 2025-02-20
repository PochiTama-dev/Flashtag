import express from 'express';
import socialNetworkController from '../controllers/socialNetworkController.js';

const router = express.Router();

export default router
  .get('/', socialNetworkController.getSocialNetworks)
  .get('/:id', socialNetworkController.getSocialNetworkById)
  .post('/', socialNetworkController.saveSocialNetwork)
  .put('/:id', socialNetworkController.updateSocialNetwork)
  .delete('/:id', socialNetworkController.destroySocialNetwork)