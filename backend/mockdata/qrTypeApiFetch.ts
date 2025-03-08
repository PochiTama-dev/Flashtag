import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/qr_types/`;

const getQrTypes =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los QrTypes.', error);
  }
}

const getQrTypeById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el QrType.', error);
  }
}

const saveQrType = async (qrType) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(qrType),
    });
    const newQrType = await response.json();
    if (newQrType.id) {
      return newQrType;
    } else {
      return console.log('El QrType no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
    console.error('Error, el QrType no fue guardado...', error);
  }
}

const updateQrType = async (id, qrType) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(qrType),
    });
    const newQrType = await response.json();
    if (newQrType) {
      return newQrType;
    } else {
      return console.log(`El QrType ${id} no fue editado, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, el QrType no fue editado...', error);
  }
}

const destroyQrType =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El QrType "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el QrType.', error);
  }
}

export { getQrTypes, getQrTypeById, saveQrType, updateQrType, destroyQrType }