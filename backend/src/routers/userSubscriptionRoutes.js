import express from 'express';
import userSubscriptionController from '../controllers/userSubscriptionController.js';

const router = express.Router();

export default router
  .get('/', userSubscriptionController.getUserSubscriptions)
  .get('/:id', userSubscriptionController.getUserSubscriptionById)
  .post('/', userSubscriptionController.saveUserSubscription)
  .put('/:id', userSubscriptionController.updateUserSubscription)
  .delete('/:id', userSubscriptionController.destroyUserSubscription)