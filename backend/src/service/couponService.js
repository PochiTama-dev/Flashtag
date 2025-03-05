import { Coupon } from '../../db/models/Associations.js';

export default {
  getCoupons: async () => {
    try {
      return await Coupon.findAll(); 
    } catch (error) {
      console.log(error);
    }
  },

  getCouponById: async (id) => {
    try {
      return await Coupon.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  },

  saveCoupon: async (coupon) => {
    try {
      return await Coupon.create({
        id_qr_code: coupon.body.id_qr_code, 
        code: coupon.body.code, 
        discount: coupon.body.discount,
        valid_from: coupon.body.valid_from,
        valid_to: coupon.body.valid_to,
        active: coupon.body.active
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateCoupon: async (coupon) => {
    try {
      const [updated] = await Coupon.update({
        id_qr_code: coupon.body.id_qr_code, 
        code: coupon.body.code, 
        discount: coupon.body.discount,
        valid_from: coupon.body.valid_from,
        valid_to: coupon.body.valid_to,
        active: coupon.body.active
      }, {
        where: { id: coupon.params.id }
      });
      if (updated) {
        return await Coupon.findByPk(coupon.params.id);
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyCoupon: async (id) => { 
    try {
      return await Coupon.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
}