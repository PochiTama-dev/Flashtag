import qrTypeService from "../service/qrTypeService.js";

export default {
  getQrTypes: async (req, res) => {
    try {
      const qrTypes = await qrTypeService.getQrTypes();
      res.status(200).json(qrTypes);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los qrTypes...', error });
    }
  },

  getQrTypeById: async (req, res) => {
    const id = req.params.id;
    try {
      const qrType = await qrTypeService.getQrTypeById(id);
      if (qrType) {
        res.status(200).json(qrType);
      } else {
        res.status(404).json({ message: `El QrType '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el QrType...', error });
    }
  },

  saveQrType: async (req, res) => {
    try {
      const qrType = await qrTypeService.saveQrType(req);
      res.status(201).json(qrType);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el QrType...', error });
    }
  },

  updateQrType: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await qrTypeService.updateQrType(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: `El QrType '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el QrType...', error });
    }
  },

  destroyQrType: async (req, res) => {
    const id = req.params.id;
    try {
      const qrType = await qrTypeService.destroyQrType(id);
      if (qrType) {
        res.status(200).json(qrType);
      } else {
        res.status(404).json({ message: `El QrType '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el QrType no se eliminó...', error });
    }
  },
}