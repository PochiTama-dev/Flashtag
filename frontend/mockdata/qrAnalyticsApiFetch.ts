import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/qr_analytics/`;

const getQrAnalytics =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los Qr Analytics.', error);
  }
}

const getQrAnalyticsById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el Qr Analytic.', error);
  }
}

const getQrAnalyticsByQrCode =  async (idQrCode) => {
  try {
    const response = await fetch(`${BASE_URL}qr_code/${idQrCode}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error al tratar de obtener los Qr Analytics del Qr ${idQrCode}.`, error);
  }
}

const saveQrAnalytic = async (qrAnalytic) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(qrAnalytic)
    });
    const newQrAnalytic = await response.json();
    if (newQrAnalytic.id) {
      return newQrAnalytic;
    } else {
      return console.log('El Qr Analytic no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, el Qr Analytic no fue guardado...', error);
  }
}

const updateQrAnalytic = async (id, qrAnalytic) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(qrAnalytic)
    });
    const updatedQrAnalytic = await response.json();
    if (updatedQrAnalytic) {
      return updatedQrAnalytic;
    } else {
      return console.log(`Los datos del Qr Analytic ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
      console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyQrAnalytic =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El Qr Analytic "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el Qr Analytic.', error);
  }
}

export { getQrAnalytics, getQrAnalyticsById, getQrAnalyticsByQrCode, saveQrAnalytic, updateQrAnalytic, destroyQrAnalytic }