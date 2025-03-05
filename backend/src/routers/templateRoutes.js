import express from 'express';
import upload from '../multer/upload.js';
import templateController from '../controllers/templateController.js';

const router = express.Router();

export default router
  .get('/', templateController.getTemplates)
  .get('/:id', templateController.getTemplateById)
  .get('/user/:id', templateController.getTemplatesByUser)
  .post('/', upload.single('image'), templateController.saveTemplate)
  .put('/:id', upload.single('image'), templateController.updateTemplate)
  .delete('/:id', templateController.destroyTemplate)