import loyaltyCardService from "../service/loyaltyCardService.js";

export default {
  getLoyaltyCards: async (req, res) => {
    try {
      const loyaltyCards = await loyaltyCardService.getLoyaltyCards();
      res.status(200).json(loyaltyCards);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las Tarjetas...', error });
    }
  },

  getLoyaltyCardById: async (req, res) => {
    const id = req.params.id;
    try {
      const loyaltyCard = await loyaltyCardService.getLoyaltyCardById(id);
      if (loyaltyCard) {
        res.status(200).json(loyaltyCard);
      } else {
        res.status(404).json({ message: `La tarjeta '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener la Tarjeta...', error });
    }
  },

  saveLoyaltyCard: async (req, res) => {
    console.log(req.body)
    try {
      const loyaltyCard = await loyaltyCardService.saveLoyaltyCard(req);
      res.status(201).json(loyaltyCard);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar la Tarjeta...', error });
    }
  },

  updateLoyaltyCard: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await loyaltyCardService.updateLoyaltyCard(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Tarjeta no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la Tarjeta...', error });
    }
  },

  destroyLoyaltyCard: async (req, res) => {
    const id = req.params.id;
    try {
      const loyaltyCard = await loyaltyCardService.destroyLoyaltyCard(id);
      if (loyaltyCard) {
        res.status(200).json(loyaltyCard);
      } else {
        res.status(404).json({ message: `La Tarjeta '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, la tarjeta no se eliminó...', error });
    }
  },
}