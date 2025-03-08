import express from 'express';
import subscriptionController from '../controllers/subscriptionController.js';

const router = express.Router();

export default router
  .get('/', subscriptionController.getSubscriptions)
  .get('/:id', subscriptionController.getSubscriptionById)
  .post('/', subscriptionController.saveSubscription)
  .put('/:id', subscriptionController.updateSubscription)
  .delete('/:id', subscriptionController.destroySubscription)