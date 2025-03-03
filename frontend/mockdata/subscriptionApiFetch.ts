import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/subscriptions/`;

const getSubscriptions =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los tipos de Suscripciones.', error);
  }
}

const getSubscriptionById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el tipo de Suscripción.', error);
  }
}

const saveSubscription = async (subscription) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscription),
    });
    const newCoupon = await response.json();
    if (newCoupon.id) {
      return newCoupon;
    } else {
      return console.log('El tipo de Suscripción no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, El tipo de Suscripción no fue guardado...', error);
  }
}

const updateSubscription = async (id, subscription) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscription),
    });
    const updateSubscription = await response.json();
    if (updateSubscription) {
      return updateSubscription;
    } else {
      return console.log(`Los datos del tipo de Suscripción ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroySubscription =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El tipo de Suscripción "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el tipo de Suscripción.', error);
  }
}

export { getSubscriptions, getSubscriptionById, saveSubscription, updateSubscription, destroySubscription }