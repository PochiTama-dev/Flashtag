import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/reviews/`;

const getReviews =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las Reseñas.', error);
  }
}

const getReviewById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener la Reseña.', error);
  }
}

const getReviewsByUser =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}user/${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener las Reseñas.', error);
  }
}

const saveReview = async (review) => {
  try {
    const form = new FormData();
    Object.keys(review).forEach(key => {
      form.append(key, review[key]);
    });
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: form,
    });
    const newReview = await response.json();
    if (newReview.id) {
      return newReview;
    } else {
      return console.log('La Reseña no fue guardada, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, la Reseña no fue guardada...', error);
  }
}

const updateReview = async (id, review) => {
  try {
    const form = new FormData();
    Object.keys(review).forEach(key => {
      form.append(key, review[key]);
    });
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      body: form,
    });
    const updatedReview = await response.json();
    if (updatedReview) {
      return updatedReview;
    } else {
      return console.log(`Los datos de la Reseña ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
      console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyReview =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `La Reseña "${id}" fue eliminada con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar la Reseña.', error);
  }
}

export { getReviews, getReviewById, getReviewsByUser, saveReview, updateReview, destroyReview }