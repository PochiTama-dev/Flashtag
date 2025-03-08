import roleService from "../service/roleService.js";

export default {
  getRoles: async (req, res) => {
    try {
      const roles = await roleService.getRoles();
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los Roles...', error });
    }
  },

  getRoleById: async (req, res) => {
    const id = req.params.id;
    try {
      const role = await roleService.getRoleById(id);
      if (role) {
        res.status(200).json(role);
      } else {
        res.status(404).json({ message: `El Rol '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el Rol...', error });
    }
  },

  saveRole: async (req, res) => {
    try {
      const role = await roleService.saveRole(req);
      res.status(201).json(role);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el Rol...', error });
    }
  },

  updateRole: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await roleService.updateRole(req);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: `El Rol '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el Rol...', error });
    }
  },

  destroyRole: async (req, res) => {
    const id = req.params.id;
    try {
      const role = await roleService.destroyRole(id);
      if (role) {
        res.status(200).json(role);
      } else {
        res.status(404).json({ message: `El Rol '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el Rol no se eliminó...', error });
    }
  },
}