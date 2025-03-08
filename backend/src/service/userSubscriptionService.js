import { UserSubscription, Subscription, User } from '../../db/models/Associations.js';

export default {
  getUserSubscriptions: async () => {
    try {
      return await UserSubscription.findAll({ include: [{ model: Subscription }, { model: User }] });
    } catch (error) {
      console.log(error); 
    }
  },

  getUserSubscriptionById: async (id) => {
    try {
      return await UserSubscription.findByPk(id, { include: [{ model: Subscription }, { model: User }] });
    } catch (error) {
      console.log(error);
    }
  },

  saveUserSubscription: async (userSubscription) => {
    try {
      return await UserSubscription.create({
        id_user: userSubscription.body.id_user, 
        id_subscription: userSubscription.body.id_subscription, 
        valid_from: userSubscription.body.valid_from,
        valid_to: userSubscription.body.valid_to
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateUserSubscription: async (userSubscription) => {
    try {
      const [updated] = await UserSubscription.update({
        id_user: userSubscription.body.id_user, 
        id_subscription: userSubscription.body.id_subscription, 
        valid_from: userSubscription.body.valid_from,
        valid_to: userSubscription.body.valid_to
      }, {
        where: { id: userSubscription.params.id }
      });
      if (updated) {
        return await UserSubscription.findByPk(userSubscription.params.id);
      }
    } catch (error) {
      console.log(error); 
    }
  },

  destroyUserSubscription: async (id) => { 
    try {
      return await UserSubscription.destroy({ where: { id: id } });
    } catch (error) {
      console.log();
    }
  }
}