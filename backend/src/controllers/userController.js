import userService from "../service/userService.js";
import { deleteAvatar } from "../helpers/handleImages.js";
import CryptoJS from "crypto-js";

export default {
  getUsers: async (req, res) => {
    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los usuarios...', error });
    }
  },

  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await userService.getUserById(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: `El Usuario '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el usuario...', error });
    }
  },

  getUserByEmail: async (req, res) => {
    const email = req.params.email;
    try {
      const user = await userService.getUserByEmail(email);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: `El email '${ email }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el usuario...', error });
    }
  },

  loginUser: async (req, res) => {
    console.log(req.body)
    try {
      const users = await userService.getUsers();
      users.forEach((user)=>{
        const decryptedPassword = CryptoJS.AES.decrypt(user.password, "FlashTag").toString(CryptoJS.enc.Utf8);
        if (req.body.email === user.email && req.body.password === decryptedPassword) {
          res.status(200).json(user);
        } else {
          res.status(200).json({ message: 'Credenciales Incorrectas...' });
        }
      })
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el usuario' });
    }
  },

  saveUser: async (req, res) => {
    try {
      const user = await userService.saveUser(req);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el usuario...', error });
    }
  },

  updateUser: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await userService.getUserById(id);
      const updated = await userService.updateUser(req);
      if (updated) {
        if (req.file) {
          deleteAvatar(path.avatar);
        }
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el usuario...', error });
    }
  },

  destroyUser: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await userService.getUserById(id);
      const user = await userService.destroyUser(id);
      if (user) {
        deleteAvatar(path.avatar);
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: `El Usuario '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el usuario no se eliminó...', error });
    }
  },
}