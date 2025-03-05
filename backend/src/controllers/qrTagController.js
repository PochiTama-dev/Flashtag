import qrTagService from "../service/qrTagService.js";

export default {
  getQrTags: async (req, res) => {
    try {
      const qrTags = await qrTagService.getQrTags();
      res.status(200).json(qrTags);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los qrTags...', error });
    }
  },

  getQrTagById: async (req, res) => {
    const id = req.params.id;
    try {
      const qrTag = await qrTagService.getQrTagById(id);
      if (qrTag) {
        res.status(200).json(qrTag);
      } else {
        res.status(404).json({ message: `El QrTag '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el QrTag...', error });
    }
  },

  saveQrTag: async (req, res) => {
    try {
      const qrTag = await qrTagService.saveQrTag(req);
      res.status(201).json(qrTag);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el QrTag...', error });
    }
  },

  updateQrTag: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await qrTagService.updateQrTag(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: `El QrTag '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el QrTag...', error });
    }
  },

  destroyQrTag: async (req, res) => {
    const id = req.params.id;
    try {
      const qrTag = await qrTagService.destroyQrTag(id);
      if (qrTag) {
        res.status(200).json(qrTag);
      } else {
        res.status(404).json({ message: `El QrTag '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el QrTag no se eliminó...', error });
    }
  },
}