import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/roles/`;

const getRoles =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los Roles.', error);
  }
}

const getRoleById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el Rol.', error);
  }
}

const saveRole = async (role) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(role),
    });
    const newRole = await response.json();
    if (newRole.id) {
      return newRole;
    } else {
      return console.log('El Rol no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
    console.error('Error, el Rol no fue guardado...', error);
  }
}

const updateRole = async (id, role) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(role),
    });
    const newRole = await response.json();
    if (newRole) {
      return newRole;
    } else {
      return console.log(`El Rol ${id} no fue editado, vuelva a intentarlo...`);
    };
  } catch (error) {
    console.error('Error, el Rol no fue editado...', error);
  }
}

const destroyRole =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El Rol "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el Rol.', error);
  }
}

export { getRoles, getRoleById, saveRole, updateRole, destroyRole }