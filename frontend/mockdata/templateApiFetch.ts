import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/templates/`;

const getTemplates =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los Templates.', error);
  }
}

const getTemplateById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el Template.', error);
  }
}

const getTemplatesByUser =  async (idUser) => {
  try {
    const response = await fetch(`${BASE_URL}user/${idUser}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error al tratar de obtener los Templates del usuario ${idUser}.`, error);
  }
}

const saveTemplate = async (template) => {
  try {
    const form = new FormData();
    Object.keys(template).forEach(key => {
      form.append(key, template[key]);
    });
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: form,
    });
    const newTemplate = await response.json();
    if (newTemplate.id) {
      return newTemplate;
    } else {
      return console.log('El template no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, el template no fue guardado...', error);
  }
}

const updateTemplate = async (id, template) => {
  try {
    const form = new FormData();
    Object.keys(template).forEach(key => {
      form.append(key, template[key]);
    });
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      body: form,
    });
    const updatedTemplate = await response.json();
    if (updatedTemplate) {
      return updatedTemplate;
    } else {
      return console.log(`Los datos del Template ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
      console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyTemplate =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El Template "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el Template.', error);
  }
}

export { getTemplates, getTemplateById, getTemplatesByUser, saveTemplate, updateTemplate, destroyTemplate }