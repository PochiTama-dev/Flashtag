import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/qr_tags/`;

const getQrTags =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los QrTags.', error);
  }
}

const getQrTagById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el QrTag.', error);
  }
}

const saveQrTag = async (qrTag) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(qrTag),
    });
    const newQrTag = await response.json();
    if (newQrTag.id) {
      return newQrTag;
    } else {
      return console.log('El QrTag no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
    console.error('Error, el QrTag no fue guardado...', error);
  }
}

const updateQrTag = async (id, qrTag) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(qrTag),
    });
    const newQrTag = await response.json();
    if (newQrTag) {
      return newQrTag;
    } else {
      return console.log(`El QrTag ${id} no fue editado, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, el QrTag no fue editado...', error);
  }
}

const destroyQrTag =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El QrTag "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el QrTag.', error);
  }
}

export { getQrTags, getQrTagById, saveQrTag, updateQrTag,destroyQrTag }