import { QrType } from '../../db/models/Associations.js';

export default {
  getQrTypes: async () => {
    try {
      return await QrType.findAll();
    } catch (error) {
      console.log(error); 
    } 
  },

  getQrTypeById: async (id) => {
    try {
      return await QrType.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  },

  saveQrType: async (qrType) => {
    try {
      return await QrType.create({ name: qrType.body.name });
    } catch (error) {
      console.log(error); 
    }
  },

  updateQrType: async (qrType) => {
    try {
      const [updated] = await QrType.update({
        name: qrType.body.name
      }, {
        where: { id: qrType.params.id }
      });
      if (updated) {
        return await QrType.findByPk(qrType.params.id);
      }
    } catch (error) {
      console.log(error); 
    }
  },

  destroyQrType: async (id) => { 
    try {
      return await QrType.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error); 
    }
  }
}