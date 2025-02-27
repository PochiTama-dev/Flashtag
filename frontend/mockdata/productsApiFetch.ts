import CONFIG from './baseURL/config.js';

const BASE_URL = `${CONFIG.BASE_URL}/products/`;

const getProducts =  async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los productos.', error);
  }
}

const getProductById =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener el producto.', error);
  }
}

const getProductByUserId =  async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}user/${userId}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al tratar de obtener los productos.', error);
  }
}

const saveProduct = async (product) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const newProduct = await response.json();
    if (newProduct.id) {
      return newProduct;
    } else {
      return console.log('El producto no fue guardado, vuelva a intentarlo...');
    };
  } catch (error) {
      console.error('Error, el producto no fue guardado...', error);
  }
}

const updateProduct = async (id, product) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const updatedProduct = await response.json();
    if (updatedProduct) {
      return updatedProduct;
    } else {
      return console.log(`Los datos del producto ${id} no se actualizaron, vuelva a intentarlo...`);
    };
  } catch (error) {
      console.error('Error, los datos no fueron actualizados correctamente...', error);
  }
}

const destroyProduct =  async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return { message: `El producto "${id}" fue eliminado con éxito.` };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('Error al eliminar el producto.', error);
  }
}

export { getProducts, getProductById, getProductByUserId, saveProduct, updateProduct, destroyProduct }