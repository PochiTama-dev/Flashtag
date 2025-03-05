import reviewService from "../service/reviewService.js";
import { deleteAvatar } from "../helpers/handleImages.js";


export default {
  getReviews: async (req, res) => {
    try {
      const reviews = await reviewService.getReviews();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las Reviews...', error });
    }
  },

  getReviewById: async (req, res) => {
    const id = req.params.id;
    try {
      const review = await reviewService.getReviewById(id);
      if (review) {
        res.status(200).json(review);
      } else {
        res.status(404).json({ message: `La Review '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener la Review...', error });
    }
  },

  getReviewsByUser: async (req, res) => {
    const id = req.params.id;
    try {
      const reviews = await reviewService.getReviewsByUser(id);
      if (reviews) {
        res.status(200).json(reviews);
      } else {
        res.status(404).json({ message: `El usuario '${ id }' no posee Reviews en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener las Reviews...', error });
    }
  },

  saveReview: async (req, res) => {
    try {
      const review = await reviewService.saveReview(req);
      res.status(201).json(review);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar la Review...', error });
    }
  },

  updateReview: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await reviewService.getReviewById(id);
      const updated = await reviewService.updateReview(req);
      if (updated) {
        if (req.file) {
          deleteAvatar(path.avatar);
        }
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Review no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la Review...', error });
    }
  },
  
  destroyReview: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await reviewService.getReviewById(id);
      const review = await reviewService.destroyReview(id);
      if (review) {
        deleteAvatar(path.avatar);
        res.status(200).json(review);
      } else {
        res.status(404).json({ message: `La Review '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, la Review no se eliminó...', error });
    }
  },
}