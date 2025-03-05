import express from 'express';
import couponController from '../controllers/couponController.js';

const router = express.Router();

export default router
  .get('/', couponController.getCoupons)
  .get('/:id', couponController.getCouponById)
  .post('/', couponController.saveCoupon)
  .put('/:id', couponController.updateCoupon)
  .delete('/:id', couponController.destroyCoupon)