import { SocialNetwork } from '../../db/models/Associations.js';

export default {
  getSocialNetworks: async () => {
    try {
      return await SocialNetwork.findAll();
    } catch (error) {
      console.log(error); 
    } 
  },

  getSocialNetworkById: async (id) => {
    try {
      return await SocialNetwork.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  },

  saveSocialNetwork: async (socialNetwork) => {
    try {
      return await SocialNetwork.create({ name: socialNetwork.body.name });
    } catch (error) {
      console.log(error);
    }
  },

  updateSocialNetwork: async (socialNetwork) => {
    try {
      const [updated] = await SocialNetwork.update({
        name: socialNetwork.body.name
      }, {
        where: { id: socialNetwork.params.id }
      });
      if (updated) {
        return await SocialNetwork.findByPk(socialNetwork.params.id);
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyRole: async (id) => {
    try {
      return await SocialNetwork.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    } 
  }
}