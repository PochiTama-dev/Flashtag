import express from 'express';
import productController from '../controllers/productController.js';

const router = express.Router();

export default router
  .get('/', productController.getProducts)
  .get('/:id', productController.getProductById)
  .get('/user/:id', productController.getProductByUserId)
  .post('/', productController.saveProduct)
  .put('/:id', productController.updateProduct)
  .delete('/:id', productController.destroyProduct)