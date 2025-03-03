import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/users/`;

const getUsers =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los usuarios.', error);
  }
}

const getUserById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el usuario.', error);
  }
}

const getUserByEmail =  async (email) => {
  try {
    const response = await fetch(`${BASE_URL}email/${email}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el usuario.', error);
  }
}

const loginUser = async (user: { email: string; password: string }) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Error, usuario no encontrado...');
    }

    const text = await response.text();
    const loginUser = text ? JSON.parse(text) : null;

    return loginUser;
  } catch (error) {
    console.error('Error, usuario no encontrado...', error);
  }
};

const saveUser = async (user) => {
  try {
    const form = new FormData();
    Object.keys(user).forEach(key => {
      form.append(key, user[key]);
    });
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: form,
    });
    const text = await response.text();
    const newUser = text ? JSON.parse(text) : {};
    if (newUser.id) {
      return newUser;
    } else {
      return console.log('El usuario no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, el usuario no fue guardado...', error);
  }
}

const updateUser = async (id, user) => {
  try {
    const form = new FormData();
    Object.keys(user).forEach(key => {
      form.append(key, user[key]);
    });
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      body: form,
    });
    const updatedUser = await response.json();
    if (updatedUser) {
      return updatedUser;
    } else {
      return console.log(`Los datos del usuario ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
      console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyUser =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El usuario "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el usuario.', error);
  }
}

export { getUsers, getUserById, getUserByEmail, loginUser, saveUser, updateUser, destroyUser }