import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/qr_codes/`;

const getQrCodes =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los códigos Qr.', error);
  }
}

const getQrCodeById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el código Qr.', error);
  }
}

const saveQrCode = async (qrCode) => {
  try {
    const form = new FormData();
    Object.keys(qrCode).forEach(key => {
      form.append(key, qrCode[key]);
    });
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: form,
    });
    const newQrCode = await response.json();
    if (newQrCode.id) {
      return newQrCode;
    } else {
      return console.log('El código Qr no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, el código Qr no fue guardado...', error);
  }
}

const updateQrCode = async (id, qrCode) => {
  try {
    const form = new FormData();
    Object.keys(qrCode).forEach(key => {
      form.append(key, qrCode[key]);
    });
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      body: form,
    });
    const updatedQrCode = await response.json();
    if (updatedQrCode) {
      return updatedQrCode;
    } else {
      return console.log(`Los datos del código Qr ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
      console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyQrCode =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El código Qr "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el código Qr.', error);
  }
}

export { getQrCodes, getQrCodeById, saveQrCode, updateQrCode, destroyQrCode }