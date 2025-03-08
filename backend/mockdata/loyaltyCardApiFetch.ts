import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/loyalty_cards/`;

const getLoyaltyCards =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las Tarjetas.', error);
  }
}

const getLoyaltyCardById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener la tarjeta.', error);
  }
}

const saveLoyaltyCard = async (loyaltyCard) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loyaltyCard),
    });
    const newLoyaltyCard = await response.json();
    if (newLoyaltyCard.id) {
      return newLoyaltyCard;
    } else {
      return console.log('La Tarjeta no fue guardada, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, la Tarjeta no fue guardada...', error);
  }
}

const updateLoyaltyCard = async (id, loyaltyCard) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loyaltyCard),
    });
    const updateLoyaltyCard = await response.json();
    if (updateLoyaltyCard) {
      return updateLoyaltyCard;
    } else {
      return console.log(`Los datos de la Tarjeta ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyLoyaltyCard =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `La Tarjeta "${id}" fue eliminada con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar la Tarjeta.', error);
  }
}

export { getLoyaltyCards, getLoyaltyCardById, saveLoyaltyCard, updateLoyaltyCard, destroyLoyaltyCard }