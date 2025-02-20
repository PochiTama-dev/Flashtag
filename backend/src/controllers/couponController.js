import couponService from "../service/couponService.js";

export default {
  getCoupons: async (req, res) => {
    try {
      const coupons = await couponService.getCoupons();
      res.status(200).json(coupons);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los Cupones...', error });
    }
  },

  getCouponById: async (req, res) => {
    const id = req.params.id;
    try {
      const coupon = await couponService.getCouponById(id);
      if (coupon) {
        res.status(200).json(coupon);
      } else {
        res.status(404).json({ message: `El Cupón '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el Cupón...', error });
    }
  },

  saveCoupon: async (req, res) => {
    try {
      const coupon = await couponService.saveCoupon(req);
      res.status(201).json(coupon);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el Cupón...', error });
    }
  },

  updateCoupon: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await couponService.updateCoupon(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Cupón no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el Cupón...', error });
    }
  },

  destroyCoupon: async (req, res) => {
    const id = req.params.id;
    try {
      const coupon = await couponService.destroyCoupon(id);
      if (coupon) {
        res.status(200).json(coupon);
      } else {
        res.status(404).json({ message: `El Cupón '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el cupón no se eliminó...', error });
    }
  },
}