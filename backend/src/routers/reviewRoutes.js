import express from 'express';
import upload from '../multer/upload.js';
import reviewController from '../controllers/reviewController.js';

const router = express.Router();

export default router
  .get('/', reviewController.getReviews)
  .get('/:id', reviewController.getReviewById)
  .get('/user/:id', reviewController.getReviewsByUser)
  .post('/', upload.single('avatar'), reviewController.saveReview)
  .put('/:id', upload.single('avatar'), reviewController.updateReview)
  .delete('/:id', reviewController.destroyReview)