import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/coupons/`;

const getCoupons =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los Cupones.', error);
  }
}

const getCouponById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el Cupón.', error);
  }
}

const saveCoupon = async (coupon) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coupon),
    });
    const newCoupon = await response.json();
    if (newCoupon.id) {
      return newCoupon;
    } else {
      return console.log('El Cupón no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, El Cupón no fue guardado...', error);
  }
}

const updateCoupon = async (id, coupon) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coupon),
    });
    const updateCoupon = await response.json();
    if (updateCoupon) {
      return updateCoupon;
    } else {
      return console.log(`Los datos del Cupón ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyCoupon =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El Cupón "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el Cupón.', error);
  }
}

export { getCoupons, getCouponById, saveCoupon, updateCoupon, destroyCoupon }