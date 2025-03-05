import { Subscription } from '../../db/models/Associations.js';

export default {
  getSubscriptions: async () => {
    try {
      return await Subscription.findAll(); 
    } catch (error) {
      console.log(error);
    }
  },

  getSubscriptionById: async (id) => {
    try {
      return await Subscription.findByPk(id);
    } catch (error) {
      console.log(error); 
    }
  },

  saveSubscription: async (subscription) => {
    try {
      return await Subscription.create({
        name: subscription.body.name, 
        days_validity: subscription.body.days_validity, 
        price: subscription.body.price
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateSubscription: async (subscription) => {
    try {
      const [updated] = await Subscription.update({
        name: subscription.body.name, 
        days_validity: subscription.body.days_validity, 
        price: subscription.body.price
      }, {
        where: { id: subscription.params.id }
      });
      if (updated) {
        return await Subscription.findByPk(subscription.params.id);
      }
    } catch (error) {
      console.log(error);
    } 
  },

  destroySubscription: async (id) => { 
    try {
      return await Subscription.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
}