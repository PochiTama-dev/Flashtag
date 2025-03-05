import express from 'express';
import upload from '../multer/upload.js';
import feedbackController from '../controllers/feedbackController.js';

const router = express.Router();

export default router
  .get('/', feedbackController.getFeedbacks)
  .get('/:id', feedbackController.getFeedbackById)
  .post('/', upload.single('avatar'), feedbackController.saveFeedback)
  .put('/:id', upload.single('avatar'), feedbackController.updateFeedback)
  .delete('/:id', feedbackController.destroyFeedback)