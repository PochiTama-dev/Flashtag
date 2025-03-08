import { Product, User } from '../../db/models/Associations.js';

export default {
  getProducts: async () => {
    try {
      return await Product.findAll({ include: { model: User } });
    } catch (error) {
      console.log(error)
    } 
  },

  getProductById: async (id) => {
    try {
      return await Product.findByPk(id, { include: { model: User } });
    } catch (error) {
      console.log(error);
    }
  },

  getProductByUserId: async (id) => {
    try {
      return await Product.findAll({ where: { id_user: id }, include: { model: User } });
    } catch (error) {
      console.log(error); 
    }
  },

  saveProduct: async (product) => {
    try {
      return await Product.create({
        id_user: product.body.id_user, 
        title: product.body.title, 
        description: product.body.description, 
        price: product.body.price
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateProduct: async (product) => {
    try {
      const [updated] = await Product.update({
        title: product.body.title, 
        description: product.body.description, 
        price: product.body.price
      }, {
        where: { id: product.params.id }
      });
      if (updated) {
        return await Product.findByPk(product.params.id, { include: [{ model: User }] });
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyProduct: async (id) => {
    try {
      return await Product.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    } 
  }
}