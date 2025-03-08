import rouletteService from "../service/rouletteService.js";

export default {
  getRoulettes: async (req, res) => {
    try {
      const roulettes = await rouletteService.getRoulettes();
      res.status(200).json(roulettes);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las Ruletas...', error });
    }
  },

  getRouletteById: async (req, res) => {
    const id = req.params.id;
    try {
      const roulette = await rouletteService.getRouletteById(id);
      if (roulette) {
        res.status(200).json(roulette);
      } else {
        res.status(404).json({ message: `La Ruleta '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener la Ruleta...', error });
    }
  },

  saveRoulette: async (req, res) => {
    try {
      const roulette = await rouletteService.saveRoulette(req);
      res.status(201).json(roulette);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar la Ruleta...', error });
    }
  },

  updateRoulette: async (req, res) => {
    try {
      const updated = await rouletteService.updateRoulette(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Ruleta no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la Ruleta...', error });
    }
  },

  destroyRoulette: async (req, res) => {
    const id = req.params.id;
    try {
      const roulette = await rouletteService.destroyRoulette(id);
      if (roulette) {
        res.status(200).json(roulette);
      } else {
        res.status(404).json({ message: `La Ruleta '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, la Ruleta no se eliminó...', error });
    }
  },
}