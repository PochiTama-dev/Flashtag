import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/social_networks/`;

const getSocialNetworks =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las Redes Sociales.', error);
  }
}

const getSocialNetworkById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener la Red Social.', error);
  }
}

const saveSocialNetwork = async (socialNetwork) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(socialNetwork),
    });
    const newSocialNetwork = await response.json();
    if (newSocialNetwork.id) {
      return newSocialNetwork;
    } else {
      return console.log('La Red Social no fue guardada, vuelva a intentarlo...');
    };
  } catch (error) {
    console.error('Error, la Red Social no fue guardada...', error);
  }
}

const updateSocialNetwork = async (id, saveSocialNetwork) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(saveSocialNetwork),
    });
    const newSocialNetwork = await response.json();
    if (newSocialNetwork) {
      return newSocialNetwork;
    } else {
      return console.log(`La Red Social ${id} no fue editada, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, la Red Social no fue editada...', error);
  }
}

const destroySocialNetwork =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `L Red Social "${id}" fue eliminada con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar la Red Social.', error);
  }
}

export { getSocialNetworks, getSocialNetworkById, saveSocialNetwork, updateSocialNetwork, destroySocialNetwork }