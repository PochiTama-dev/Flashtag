import subscriptionService from "../service/subscriptionService.js";

export default {
  getSubscriptions: async (req, res) => {
    try {
      const subscriptions = await subscriptionService.getSubscriptions();
      res.status(200).json(subscriptions);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los tipos de Suscripciones...', error });
    }
  },

  getSubscriptionById: async (req, res) => {
    const id = req.params.id;
    try {
      const subscription = await subscriptionService.getSubscriptionById(id);
      if (subscription) {
        res.status(200).json(subscription);
      } else {
        res.status(404).json({ message: `El tipo de Suscripción '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el tipo de Suscripción...', error });
    }
  },

  saveSubscription: async (req, res) => {
    try {
      const subscription = await subscriptionService.saveSubscription(req);
      res.status(201).json(subscription);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el tipo de Suscripción...', error });
    }
  },

  updateSubscription: async (req, res) => {
    try {
      const updated = await subscriptionService.updateSubscription(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Tipo de Suscripción no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el tipo de Suscripción...', error });
    }
  },

  destroySubscription: async (req, res) => {
    const id = req.params.id;
    try {
      const subscription = await subscriptionService.destroySubscription(id);
      if (subscription) {
        res.status(200).json(subscription);
      } else {
        res.status(404).json({ message: `El tipo de Suscripción '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el tipo de Suscripción no se eliminó...', error });
    }
  },
}