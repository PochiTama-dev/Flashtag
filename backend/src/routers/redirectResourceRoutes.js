import express from 'express';
import redirectResourceController from '../controllers/redirectResourceController.js';

const router = express.Router();

export default router.get('/:id', redirectResourceController.redirect);