import { Template, User } from '../../db/models/Associations.js';

export default {
  getTemplates: async () => {
    try {
      return await Template.findAll({ include: { model: User } });
    } catch (error) {
      console.log(error);
    } 
  },

  getTemplateById: async (id) => {
    try {
      return await Template.findByPk(id, { include: { model: User } });
    } catch (error) {
      console.log(error);
    }
  },

  getTemplatesByUser: async (id) => {
    try {
      return await Template.findAll({ where: { id_user: id}, include: { model: User } });
    } catch (error) {
      console.log(error);
    }
  },

  saveTemplate: async (template) => {
    try {
      return await Template.create({
        id_user: template.body.id_user, 
        image: template.file.path.substring(4),  
      });
    } catch (error) {
      console.log(error); 
    }
  },

  updateTemplate: async (template) => {
    try {
      const [updated] = await Template.update({
        image: template.file.path.substring(4)
      }, {
        where: { id: template.params.id }
      });
      if (updated) {
        return await Template.findByPk(template.params.id, { include: [{ model: User }] });
      }
    } catch (error) {
      console.log(error); 
    }
  },

  destroyTemplate: async (id) => {
    try {
      return await Template.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    } 
  }
}