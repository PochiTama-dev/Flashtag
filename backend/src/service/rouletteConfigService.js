import { RouletteConfig } from '../../db/models/Associations.js';

export default {
  getConfigs: async () => {
    try {
      return await RouletteConfig.findAll();
    } catch (error) {
      console.log(error);
    }
  },

  getConfigById: async (id) => {
    try {
      return await RouletteConfig.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  },

  getConfigByRouletteId: async (id) => {
    try {
      return await RouletteConfig.findAll({ where: { id_roulette: id }});
    } catch (error) {
      console.log(error);
    }
  },

  saveConfig: async (config) => {
    try {
      return await RouletteConfig.create({
        id_roulette: config.body.id_roulette, 
        reward: config.body.reward, 
        description: config.body.description, 
        probability: config.body.probability
      });
    } catch (error) {
      console.log(error);
    } 
  },

  updateConfig: async (config) => {
    try {
      const [updated] = await RouletteConfig.update({
        id_roulette: config.body.id_roulette, 
        reward: config.body.reward, 
        description: config.body.description, 
        probability: config.body.probability
      }, {
        where: { id: config.params.id }
      });
      if (updated) {
        return await RouletteConfig.findByPk(config.params.id);
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyConfig: async (id) => { 
    try {
      return await RouletteConfig.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error); 
    }
  }
}