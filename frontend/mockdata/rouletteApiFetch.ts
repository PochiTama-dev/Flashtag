import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/roulettes/`;

const getRoulettes =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las Ruletas.', error);
  }
}

const getRouletteById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener la Ruleta.', error);
  }
}

const saveRoulette = async (roulette) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roulette),
    });
    const newRoulette = await response.json();
    if (newRoulette.id) {
      return newRoulette;
    } else {
      return console.log('La Ruleta no fue guardada, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, la Ruleta no fue guardada...', error);
  }
}

const updateRoulette = async (id, roulette) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roulette),
    });
    const updateRoulette = await response.json();
    if (updateRoulette) {
      return updateRoulette;
    } else {
      return console.log(`Los datos de la Ruleta ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyRoulette =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `La Ruleta "${id}" fue eliminada con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar la Ruleta.', error);
  }
}

export { getRoulettes, getRouletteById, saveRoulette, updateRoulette, destroyRoulette }