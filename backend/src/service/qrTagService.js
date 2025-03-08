import { QrTag } from '../../db/models/Associations.js';

export default {
  getQrTags: async () => {
    try {
      return await QrTag.findAll();
    } catch (error) {
      console.log(error);
    } 
  },

  getQrTagById: async (id) => {
    try {
      return await QrTag.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  },

  saveQrTag: async (qrTag) => {
    try {
      return await QrTag.create({ label: qrTag.body.label });
    } catch (error) {
      console.log(error); 
    }
  },

  updateQrTag: async (qrTag) => {
    try {
      const [updated] = await QrTag.update({
        label: qrTag.body.label
      }, {
        where: { id: qrTag.params.id }
      });
      if (updated) {
        return await QrTag.findByPk(qrTag.params.id);
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyQrTag: async (id) => { 
    try {
      return await QrTag.destroy({ where: { id: id } }); 
    } catch (error) {
      console.log(error);
    }
  }
}