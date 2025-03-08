import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/feedbacks/`;

const getFeedbacks =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los Feedbacks.', error);
  }
}

const getFeedbackById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el Feedback.', error);
  }
}

const saveFeedback = async (feedback) => {
  try {
    const form = new FormData();
    Object.keys(feedback).forEach(key => {
      form.append(key, feedback[key]);
    });
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: form,
    });
    const newFeedback = await response.json();
    if (newFeedback.id) {
      return newFeedback;
    } else {
      return console.log('El Feedback no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, el feedback no fue guardado...', error);
  }
}

const updateFeedback = async (id, feedback) => {
  try {
    const form = new FormData();
    Object.keys(feedback).forEach(key => {
      form.append(key, feedback[key]);
    });
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      body: form,
    });
    const updatedFeedback = await response.json();
    if (updatedFeedback) {
      return updatedFeedback;
    } else {
      return console.log(`Los datos del Feedback ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
      console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyFeedback =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El Feedback "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar El Feedback.', error);
  }
}

export { getFeedbacks, getFeedbackById, saveFeedback, updateFeedback, destroyFeedback }