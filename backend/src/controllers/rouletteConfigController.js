import rouletteConfigService from "../service/rouletteConfigService.js";

export default {
  getConfigs: async (req, res) => {
    try {
      const configs = await rouletteConfigService.getConfigs();
      res.status(200).json(configs);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las Configuraciones de las Ruletas...', error });
    }
  },

  getConfigById: async (req, res) => {
    const id = req.params.id;
    try {
      const config = await rouletteConfigService.getConfigById(id);
      if (config) {
        res.status(200).json(config);
      } else {
        res.status(404).json({ message: `La Configuración '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener la Configuración de ruleta...', error });
    }
  },

  getConfigByRouletteId: async (req, res) => {
    const id = req.params.id;
    try {
      const configs = await rouletteConfigService.getConfigByRouletteId(id);
      if (configs.length) {
        res.status(200).json(configs);
      } else {
        res.status(404).json({ message: `La Ruleta '${ id }' no tiene Configuraciones guardadas.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las Configuraciones de la ruleta...', error });
    }
  },

  saveConfig: async (req, res) => {
    try {
      const config = await rouletteConfigService.saveConfig(req);
      res.status(201).json(config);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar la Configuración...', error });
    }
  },

  updateConfig: async (req, res) => {
    try {
      const updated = await rouletteConfigService.updateConfig(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Configuración no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la Configuración...', error });
    }
  },

  destroyConfig: async (req, res) => {
    const id = req.params.id;
    try {
      const config = await rouletteConfigService.destroyConfig(id);
      if (config) {
        res.status(200).json(config);
      } else {
        res.status(404).json({ message: `La Configuración '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, la configuración no se eliminó...', error });
    }
  },
}