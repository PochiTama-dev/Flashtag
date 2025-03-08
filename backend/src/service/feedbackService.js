import { Feedback } from '../../db/models/Associations.js';

export default {
  getFeedbacks: async () => {
    try {
      return await Feedback.findAll(); 
    } catch (error) {
      console.log(error);
    }
  },

  getFeedbackById: async (id) => {
    try {
      return await Feedback.findByPk(id);
    } catch (error) {
      console.log(error);
    } 
  },
  
  saveFeedback: async (feedback) => {
    try {
      return await Feedback.create({ 
        id_qr_code: feedback.body.id_qr_code,
        date: feedback.body.date,
        fullname: feedback.body.fullname,
        email: feedback.body.email,
        comment: feedback.body.comment,
        stars: feedback.body.stars,
        avatar: feedback.file ? feedback.file.path.substring(4) : 'uploads\\default-avatar.jpeg' 
      });
    } catch (error) {
      console.log(error);
    } 
  },

  updateFeedback: async (feedback) => {
    try {
      if (feedback.file) {
        const [updated] = await Feedback.update({
          date: feedback.body.date,
          fullname: feedback.body.fullname,
          email: feedback.body.email,
          comment: feedback.body.comment,
          stars: feedback.body.stars,
          avatar: feedback.file.path.substring(4)
        }, {
          where: { id: feedback.params.id }
        });
        if (updated) {
          return await Feedback.findByPk(feedback.params.id);
        }
      } else {
        const [updated] = await Feedback.update({
          date: feedback.body.date,
          fullname: feedback.body.fullname,
          email: feedback.body.email,
          comment: feedback.body.comment,
          stars: feedback.body.stars
        }, {
          where: { id: feedback.params.id }
        });
        if (updated) {
          return await Feedback.findByPk(feedback.params.id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyFeedback: async (id) => { 
    try {
      return await Feedback.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
}