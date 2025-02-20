import { Review } from '../../db/models/Associations.js';

export default {
  getReviews: async () => {
    try {
      return await Review.findAll(); 
    } catch (error) {
      console.log(error); 
    }
  },

  getReviewById: async (id) => {
    try {
      return await Review.findByPk(id);
    } catch (error) {
      console.log(error); 
    } 
  },

  getReviewsByUser: async (id) => {
    try {
      return await Review.findAll({ where: { id_user: id } });
    } catch (error) {
      console.log(error); 
    }
  },

  saveReview: async (review) => {
    try {
      return await Review.create({ 
        id_user: review.body.id_user,
        date: review.body.date,
        fullname: review.body.fullname,
        email: review.body.email,
        comment: review.body.comment,
        stars: review.body.stars,
        avatar: review.file ? review.file.path.substring(4) : 'uploads\\default-avatar.jpeg' 
      });
    } catch (error) {
      console.log(error); 
    }
  },

  updateReview: async (review) => {
    try {
      if (review.file) {
        const [updated] = await Review.update({
          date: review.body.date,
          fullname: review.body.fullname,
          email: review.body.email,
          comment: review.body.comment,
          stars: review.body.stars,
          avatar: review.file.path.substring(4)
        }, {
          where: { id: review.params.id }
        });
        if (updated) {
          return await Review.findByPk(review.params.id);
        }
      } else {
        const [updated] = await Review.update({
          date: review.body.date,
          fullname: review.body.fullname,
          email: review.body.email,
          comment: review.body.comment,
          stars: review.body.stars
        }, {
          where: { id: review.params.id }
        });
        if (updated) {
          return await Review.findByPk(review.params.id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyReview: async (id) => { 
    try {
      return await Review.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
}