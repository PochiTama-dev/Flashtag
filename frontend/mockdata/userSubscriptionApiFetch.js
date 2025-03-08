import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/user_subscriptions/`;

const getUserSubscriptions =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las Suscripciones.', error);
  }
}

const getUserSubscriptionById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener la Suscripción.', error);
  }
}

const saveUserSubscription = async (subscription) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscription),
    });
    const newUserSubscription = await response.json();
    if (newUserSubscription.id) {
      return newUserSubscription;
    } else {
      return console.log('La Suscripción no fue guardada, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, la Suscripción no fue guardada...', error);
  }
}

const updateUserSubscription = async (id, subscription) => {
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
      return console.log(`Los datos de la Suscripción ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyUserSubscription =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `La Suscripción "${id}" fue eliminada con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar la Suscripción.', error);
  }
}

export { getUserSubscriptions, getUserSubscriptionById, saveUserSubscription, updateUserSubscription, destroyUserSubscription }