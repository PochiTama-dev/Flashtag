import linkListService from "../service/linkListService.js";

export default {
  getLinkLists: async (req, res) => {
    try {
      const linkLists = await linkListService.getLinkLists();
      res.status(200).json(linkLists);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las Listas de Enlaces...', error });
    }
  },

  getLinkListById: async (req, res) => {
    const id = req.params.id;
    try {
      const linkList = await linkListService.getLinkListById(id);
      if (linkList) {
        res.status(200).json(linkList);
      } else {
        res.status(404).json({ message: `La lista de enlaces '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener la Lista de enlaces...', error });
    }
  },

  saveLinkList: async (req, res) => {
    try {
      const linkList = await linkListService.saveLinkList(req);
      res.status(201).json(linkList);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar la Lista de enlaces...', error });
    }
  },

  updateLinkList: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await linkListService.updateLinkList(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Lista de enlaces no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la Lista de enlces...', error });
    }
  },

  destroyLinkList: async (req, res) => {
    const id = req.params.id;
    try {
      const linkList = await linkListService.destroyLinkList(id);
      if (linkList) {
        res.status(200).json(linkList);
      } else {
        res.status(404).json({ message: `La lista de enlaces '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, la Lista de enlaces no se eliminó...', error });
    }
  },
}