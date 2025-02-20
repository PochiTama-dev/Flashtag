import feedbackService from "../service/feedbackService.js";
import { deleteAvatar } from "../helpers/handleImages.js";

export default {
  getFeedbacks: async (req, res) => {
    try {
      const feedbacks = await feedbackService.getFeedbacks();
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los Feedbacks...', error });
    }
  },

  getFeedbackById: async (req, res) => {
    const id = req.params.id;
    try {
      const feedback = await feedbackService.getFeedbackById(id);
      if (feedback) {
        res.status(200).json(feedback);
      } else {
        res.status(404).json({ message: `El Feedback '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el Feedback...', error });
    }
  },

  saveFeedback: async (req, res) => {
    
    try {
      const feedback = await feedbackService.saveFeedback(req);
      res.status(201).json(feedback);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el Feedback...', error });
    }
  },

  updateFeedback: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await feedbackService.getFeedbackById(id);
      const updated = await feedbackService.updateFeedback(req);
      if (updated) {
        if (req.file) {
          deleteAvatar(path.avatar);
        }
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Feedback no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el Feedback...', error });
    }
  },
  
  destroyFeedback: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await feedbackService.getFeedbackById(id);
      const feedback = await feedbackService.destroyFeedback(id);
      if (feedback) {
        deleteAvatar(path.avatar);
        res.status(200).json(feedback);
      } else {
        res.status(404).json({ message: `El Feedback '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el Feedback no se eliminó...', error });
    }
  },
}