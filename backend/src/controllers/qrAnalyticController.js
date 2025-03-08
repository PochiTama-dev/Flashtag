import qrAnalyticService from "../service/qrAnalyticService.js";

export default {
  getQrAnalytics: async (req, res) => {
    try {
      const qrAnalytics = await qrAnalyticService.getQrAnalytics();
      res.status(200).json(qrAnalytics);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener la información...', error });
    }
  },

  getQrAnalyticById: async (req, res) => {
    const id = req.params.id;
    try {
      const qrAnalytic = await qrAnalyticService.getQrAnalyticById(id);
      if (qrAnalytic) {
        res.status(200).json(qrAnalytic);
      } else {
        res.status(404).json({ message: `El Qr Analytic '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el Qr Analytic...', error });
    }
  },

  getQrAnalyticByQrCode: async (req, res) => {
    const id = req.params.id;
    try {
      const qrAnalytics = await qrAnalyticService.getQrAnalyticByQrCode(id);
      if (qrAnalytics.length) {
        res.status(200).json(qrAnalytics);
      } else {
        res.status(404).json({ message: `El Qr '${ id }' aún no posee informe de Analytics.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el informe de Analytics...', error });
    }
  },

  saveQrAnalytic: async (req, res) => {
    try {
      const qrAnalytic = await qrAnalyticService.saveQrAnalytic(req);
      res.status(201).json(qrAnalytic);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el Qr Analytic...', error });
    }
  },

  updateQrAnalytic: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await qrAnalyticService.updateQrAnalytic(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Qr Analytic no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el Qr Analytic...', error });
    }
  },

  destroyQrAnalytic: async (req, res) => {
    const id = req.params.id;
    try {
      const qrAnalytic = await qrAnalyticService.destroyQrAnalytic(id);
      if (qrAnalytic) {
        res.status(200).json(qrAnalytic);
      } else {
        res.status(404).json({ message: `El Qr Analytic '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el Qr Analyticc no se eliminó...', error });
    }
  }
}