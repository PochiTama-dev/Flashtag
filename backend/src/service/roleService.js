import { Role } from '../../db/models/Associations.js';

export default {
  getRoles: async () => {
    try {
      return await Role.findAll();
    } catch (error) {
      console.log(error); 
    }  
  },

  getRoleById: async (id) => {
    try {
      return await Role.findByPk(id);
    } catch (error) {
      console.log(error); 
    } 
  },

  saveRole: async (role) => {
    try {
      return await Role.create({ name: role.body.name });
    } catch (error) {
      console.log(error); 
    }
  },

  updateRole: async (role) => {
    try {
      const [updated] = await Role.update({
        name: role.body.name
      }, {
        where: { id: role.params.id }
      });
      if (updated) {
        return await Role.findByPk(role.params.id);
      }
    } catch (error) {
      console.log(error);
    } 
  },

  destroyRole: async (id) => { 
    try {
      return await Role.destroy({ where: { id: id } });  
    } catch (error) {
      console.log(error);
    }
  }
}