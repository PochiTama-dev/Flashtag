import qrCodeService from "../service/qrCodeService.js";
import { deleteFile } from "../helpers/handleImages.js";

export default {
  getQrCodes: async (req, res) => {
    try {
      const qrCodes = await qrCodeService.getQrCodes();
      res.status(200).json(qrCodes);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener los códigos Qr...', error });
    }
  },

  getQrCodeById: async (req, res) => {
    const id = req.params.id;
    try {
      const qrCode = await qrCodeService.getQrCodeById(id);
      if (qrCode) {
        res.status(200).json(qrCode);
      } else {
        res.status(404).json({ message: `El código Qr '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener el código Qr...', error });
    }
  },

  saveQrCode: async (req, res) => {
    try {
 
      const qrCodeData = {
        body: req.body,       
        file: req.file          
      };
  
   
      const qrCode = await qrCodeService.saveQrCode(qrCodeData);
  
      res.status(201).json(qrCode);
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de guardar el código Qr...', error });
    }
  },
  updateQrCode: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await qrCodeService.getQrCodeById(id);
      const updated = await qrCodeService.updateQrCode(req);
      if (updated) {
        if (req.file) {
          deleteFile(path.image);
        }
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Código Qr no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el código Qr...', error });
    }
  },

  destroyQrCode: async (req, res) => {
    const id = req.params.id;
    try {
      const path = await qrCodeService.getQrCodeById(id);
      const qrCode = await qrCodeService.destroyQrCode(id);
      if (qrCode) {
        deleteFile(path.image);
        res.status(200).json(qrCode);
      } else {
        res.status(404).json({ message: `El código Qr '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor, el código Qr no se eliminó...', error });
    }
  }
}