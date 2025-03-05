import { User, Role, Subscription, UserSubscription } from '../../db/models/Associations.js';
import CryptoJS from "crypto-js";

export default {
  getUsers: async () => {
    try {
      return await User.findAll({ 
        include: [
          { model: Role }, 
          { model: UserSubscription, include: { model: Subscription } }
        ] 
      }); 
    } catch (error) {
      console.log(error);
    } 
  },

  getUserById: async (id) => {
    try {
      return await User.findByPk(id, { 
        include: [
          { model: Role }, 
          { model: UserSubscription, include: { model: Subscription } }
        ] 
      });
    } catch (error) {
      console.log(error);
    }
  },

  getUserByEmail: async (email) => {
    try {
      return await User.findOne({ 
        where: { email }, 
        include: [{ model: Role }, { model: UserSubscription, include: { model: Subscription } }] 
      });
    } catch (error) {
      console.log(error); 
    }
  },

  saveUser: async (user) => {
    try {
      return await User.create({
        id_role: user.body.id_role, 
        company: user.body.company, 
        cuit_cuil: user.body.cuit_cuil, 
        fullname: user.body.fullname, 
        dni: user.body.dni, 
        phone: user.body.phone,
        email: user.body.email,
        password: CryptoJS.AES.encrypt(user.body.password, "FlashTag").toString(),
        avatar: user.file ? user.file.path.substring(4) : 'uploads\\default-avatar.jpeg'
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (user) => {
    try {
      if (user.file) {
        const [updated] = await User.update({
          id_role: user.body.id_role, 
          company: user.body.company, 
          cuit_cuil: user.body.cuit_cuil, 
          fullname: user.body.fullname, 
          dni: user.body.dni, 
          phone: user.body.phone,
          email: user.body.email,
          password: CryptoJS.AES.encrypt(user.body.password, "FlashTag").toString(),
          avatar: user.file.path.substring(4),
        }, {
          where: { id: user.params.id }
        });
        if (updated) {
          return await User.findByPk(user.params.id, { include: [{ model: Role }] });
        }
      } else {
        const [updated] = await User.update({
          id_role: user.body.id_role, 
          company: user.body.company, 
          cuit_cuil: user.body.cuit_cuil, 
          fullname: user.body.fullname, 
          dni: user.body.dni, 
          phone: user.body.phone,
          email: user.body.email,
          password: CryptoJS.AES.encrypt(user.body.password, "FlashTag").toString()
        }, {
          where: { id: user.params.id }
        });
        if (updated) {
          return await User.findByPk(user.params.id, { include: [{ model: Role }] });
        }
      }
    } catch (error) {
      console.log(error); 
    }
  },

  destroyUser: async (id) => { 
    try {
      return await User.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
}