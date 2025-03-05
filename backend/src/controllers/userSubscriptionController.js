import userSubscriptionService from "../service/userSubscriptionService.js";

export default {
  getUserSubscriptions: async (req, res) => {
    try {
      const userSubscriptions = await userSubscriptionService.getUserSubscriptions();
      res.status(200).json(userSubscriptions);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las Suscripciones...', error });
    }
  },

  getUserSubscriptionById: async (req, res) => {
    const id = req.params.id;
    try {
      const userSubscription = await userSubscriptionService.getUserSubscriptionById(id);
      if (userSubscription) {
        res.status(200).json(userSubscription);
      } else {
        res.status(404).json({ message: `La Suscripción '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener la Suscripción...', error });
    }
  },

  saveUserSubscription: async (req, res) => {
    try {
      const userSubscription = await userSubscriptionService.saveUserSubscription(req);
      res.status(201).json(userSubscription);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar la Suscripción...', error });
    }
  },

  updateUserSubscription: async (req, res) => {
    try {
      const updated = await userSubscriptionService.updateUserSubscription(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Suscripción no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la Suscripción...', error });
    }
  },

  destroyUserSubscription: async (req, res) => {
    const id = req.params.id;
    try {
      const userSubscription = await userSubscriptionService.destroyUserSubscription(id);
      if (userSubscription) {
        res.status(200).json(userSubscription);
      } else {
        res.status(404).json({ message: `La Suscripción '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, la Suscripción no se eliminó...', error });
    }
  },
}