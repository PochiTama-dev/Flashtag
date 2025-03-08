import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/link_lists/`;

const getLinkLists =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las Listas de enlaces.', error);
  }
}

const getLinkListById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener la Lista de enlaces.', error);
  }
}

const saveLinkList = async (linkList) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(linkList),
    });
    const newLinkList = await response.json();
    if (newLinkList.length) {
      return newLinkList;
    } else {
      return console.log('La Lista de enlaces no fue guardada, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, la Lista de enlaces no fue guardada...', error);
  }
}

const updateLinkList = async (id, linkList) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(linkList),
    });
    const updateLinkList = await response.json();
    if (updateLinkList) {
      return updateLinkList;
    } else {
      return console.log(`Los datos de la Lista de enlaces ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyLinkList =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `La Lista de enlaces "${id}" fue eliminada con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar La lista de enlaces.', error);
  }
}

export { getLinkLists, getLinkListById, saveLinkList, updateLinkList, destroyLinkList }