import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/wifis/`;

const getWifis =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las redes Wifis.', error);
  }
}

const getWifiById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener la red Wifi.', error);
  }
}

const saveWifi = async (wifi) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wifi),
    });
    const newWifi = await response.json();
    if (newWifi.id) {
      return newWifi;
    } else {
      return console.log('La red Wifi no fue guardada, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, la red Wifi no fue guardada...', error);
  }
}

const updateWifi = async (id, wifi) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wifi),
    });
    const updatedWifi = await response.json();
    if (updatedWifi) {
      return updatedWifi;
    } else {
      return console.log(`Los datos de la red Wifi ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
      console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyWifi =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `La red Wifi "${id}" fue eliminada con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar la red Wifi.', error);
  }
}

export { getWifis, getWifiById, saveWifi, updateWifi, destroyWifi }