import templateService from "../service/templateService.js";
import { deleteFile } from "../helpers/handleImages.js";

export default {
  getTemplates: async (req, res) => {
    try {
      const templates = await templateService.getTemplates();
      res.status(200).json(templates);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los templates...', error });
    }
  },

  getTemplateById: async (req, res) => {
    const id = req.params.id;
    try {
      const template = await templateService.getTemplateById(id);
      if (template) {
        res.status(200).json(template);
      } else {
        res.status(404).json({ message: `El Template '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el Template...', error });
    }
  },

  getTemplatesByUser: async (req, res) => {
    const id = req.params.id;
    try {
      const template = await templateService.getTemplatesByUser(id);
      if (template) {
        res.status(200).json(template);
      } else {
        res.status(404).json({ message: `No se encuentran en la base de datos Templates asociados al usuario con el id '${ id }'.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el Template...', error });
    }
  },

  saveTemplate: async (req, res) => {
    try {
      const template = await templateService.saveTemplate(req);
      res.status(201).json(template);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el Template...', error });
    }
  },

  updateTemplate: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await templateService.getTemplateById(id);
      const updated = await templateService.updateTemplate(req);
      if (updated) {
        if (req.file) {
          deleteFile(path.image);
        }
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Template no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el Template...', error });
    }
  },

  destroyTemplate: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await templateService.getTemplateById(id);
      const template = await templateService.destroyTemplate(id);
      if (template) {
        deleteFile(path.image);
        res.status(200).json(template);
      } else {
        res.status(404).json({ message: `El Template '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el template no se eliminó...', error });
    }
  }
}