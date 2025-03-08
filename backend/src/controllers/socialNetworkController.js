import socialNetworkService from "../service/socialNetworkService.js";

export default {
  getSocialNetworks: async (req, res) => {
    try {
      const socialNetworks = await socialNetworkService.getSocialNetworks();
      res.status(200).json(socialNetworks);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las Redes Sociales...', error });
    }
  },

  getSocialNetworkById: async (req, res) => {
    const id = req.params.id;
    try {
      const socialNetwork = await socialNetworkService.getSocialNetworkById(id);
      if (socialNetwork) {
        res.status(200).json(socialNetwork);
      } else {
        res.status(404).json({ message: `La Red Social '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener La Red Social...', error });
    }
  },

  saveSocialNetwork: async (req, res) => {
    try {
      const socialNetwork = await socialNetworkService.saveSocialNetwork(req);
      res.status(201).json(socialNetwork);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar la Red Social...', error });
    }
  },

  updateSocialNetwork: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await socialNetworkService.updateSocialNetwork(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: `La Red Social '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la Red Social...', error });
    }
  },

  destroySocialNetwork: async (req, res) => {
    const id = req.params.id;
    try {
      const socialNetwork = await socialNetworkService.destroySocialNetwork(id);
      if (socialNetwork) {
        res.status(200).json(socialNetwork);
      } else {
        res.status(404).json({ message: `La Red Social '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, La Red Social no se eliminó...', error });
    }
  },
}