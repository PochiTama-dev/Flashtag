import productService from "../service/productService.js";

export default {
  getProducts: async (req, res) => {
    try {
      const products = await productService.getProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los productos...', error });
    }
  },

  getProductById: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await productService.getProductById(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: `El Producto '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el producto...', error });
    }
  },

  getProductByUserId: async (req, res) => {
    const id = req.params.id;
    try {
      const products = await productService.getProductByUserId(id);
      if (products.length) {
        res.status(200).json(products);
      } else {
        res.status(404).json({ message: `El Usuario '${ id }' no tiene productos en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener productos...', error });
    }
  },

  saveProduct: async (req, res) => {
    try {
      const product = await productService.saveProduct(req);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el producto...', error });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const updated = await productService.updateProduct(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Producto no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el producto...', error });
    }
  },

  destroyProduct: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await productService.destroyProduct(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: `El Producto '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el producto no se eliminó...', error });
    }
  },
}