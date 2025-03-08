import { Roulette, RouletteConfig } from '../../db/models/Associations.js';

export default {
  getRoulettes: async () => {
    try {
      return await Roulette.findAll({ include: { model: RouletteConfig } });
    } catch (error) {
      console.log(error);
    } 
  },

  getRouletteById: async (id) => {
    try {
      return await Roulette.findByPk(id, { include: { model: RouletteConfig } });
    } catch (error) {
      console.log(error);
    }
  },

  saveRoulette: async (roulette) => {
    try {
      return await Roulette.create({
        id_qr_code: roulette.body.id_qr_code, 
        title: roulette.body.title, 
        description: roulette.body.description
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateRoulette: async (roulette) => {
    try {
      const [updated] = await Roulette.update({
        id_qr_code: roulette.body.id_qr_code, 
        title: roulette.body.title, 
        description: roulette.body.description
      }, {
        where: { id: roulette.params.id }
      });
      if (updated) {
        return await Roulette.findByPk(roulette.params.id, { include: [{ model: RouletteConfig }] });
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyRoulette: async (id) => { 
    try {
      return await Roulette.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
}