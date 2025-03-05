import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/roulette_configs/`;

const getConfigs =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las Configuraciones de las ruletas.', error);
  }
}

const getConfigById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener la Configuración.', error);
  }
}

const getConfigByRouletteId =  async (rouletteId) => {
  try {
    const response = await fetch(`${BASE_URL}roulette/${rouletteId}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las Configuraciones.', error);
  }
}

const saveConfig = async (config) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    const newConfig = await response.json();
    if (newConfig.id) {
      return newConfig;
    } else {
      return console.log('La Configuración no fue guardada, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, la Configuración no fue guardada...', error);
  }
}

const updateConfig = async (id, config) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    const updatedConfig = await response.json();
    if (updatedConfig) {
      return updatedConfig;
    } else {
      return console.log(`Los datos de la Configuración ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
      console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyConfig =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `La configuración "${id}" fue eliminada con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar la configuración.', error);
  }
}

export { getConfigs, getConfigById, getConfigByRouletteId, saveConfig, updateConfig, destroyConfig }