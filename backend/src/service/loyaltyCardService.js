import { LoyaltyCard } from '../../db/models/Associations.js';

export default {
  getLoyaltyCards: async () => {
    try {
      return await LoyaltyCard.findAll();
    } catch (error) {
      console.log(error);
    }   
  },

  getLoyaltyCardById: async (id) => {
    try {
      return await LoyaltyCard.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  },

  saveLoyaltyCard: async (loyaltyCard) => {
    try {
      return await LoyaltyCard.create({
        id_qr_code: loyaltyCard.body.id_qr_code, 
        title: loyaltyCard.body.title, 
        reward_condition: loyaltyCard.body.reward_condition,
        reward_description: loyaltyCard.body.reward_description
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateLoyaltyCard: async (loyaltyCard) => {
    try {
      const [updated] = await LoyaltyCard.update({
        id_qr_code: loyaltyCard.body.id_qr_code, 
        title: loyaltyCard.body.title, 
        reward_condition: loyaltyCard.body.reward_condition,
        reward_description: loyaltyCard.body.reward_description
      }, {
        where: { id: loyaltyCard.params.id }
      });
      if (updated) {
        return await LoyaltyCard.findByPk(loyaltyCard.params.id);
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyLoyaltyCard: async (id) => { 
    try {
      return await LoyaltyCard.destroy({ where: { id: id } }); 
    } catch (error) {
      console.log()
    }
  }
}