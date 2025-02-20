import wifiService from "../service/wifiService.js";

export default {
  getWifis: async (req, res) => {
    try {
      const wifis = await wifiService.getWifis();
      res.status(200).json(wifis);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las redes Wifis...', error });
    }
  },

  getWifiById: async (req, res) => {
    const id = req.params.id;
    try {
      const wifi = await wifiService.getWifiById(id);
      if (wifi) {
        res.status(200).json(wifi);
      } else {
        res.status(404).json({ message: `La red Wifi '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener la red Wifi...', error });
    }
  },

  saveWifi: async (req, res) => {
    try {
      const wifi = await wifiService.saveWifi(req);
      res.status(201).json(wifi);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar la red Wifi...', error });
    }
  },

  updateWifi: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await wifiService.updateWifi(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Wifi no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la red Wifi...', error });
    }
  },

  destroyWifi: async (req, res) => {
    const id = req.params.id;
    try {
      const wifi = await wifiService.destroyWifi(id);
      if (wifi) {
        res.status(200).json(wifi);
      } else {
        res.status(404).json({ message: `La red Wifi '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, la red Wifi no se eliminó...', error });
    }
  },
}