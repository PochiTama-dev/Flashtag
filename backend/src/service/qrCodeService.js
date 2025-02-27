import { QrCode, Product } from '../../db/models/Associations.js';
import { v4 as uuidv4 } from 'uuid';
import upload from '../multer/upload.js';

export default {
  getQrCodes: async () => {
    try {
      return await QrCode.findAll({ include: { model: Product } });
    } catch (error) {
      console.log(error); 
    }
  },

  getQrCodeById: async (id) => {
    try {
      return await QrCode.findByPk(id, { include: { model: Product } });
    } catch (error) {
      console.log(error); 
    }
  },
  
  saveQrCode: async (req, res) => {
    try {
      // Generar el código único si no se pasa
      let code = req.body.code;
      if (!code) {
        code = uuidv4();
      }
  
      const existingCode = await QrCode.findOne({ where: { code: code } });
      if (existingCode) {
        throw new Error('El código QR ya existe con ese código.');
      }
  
      // Verifica si se está subiendo un archivo, si no, asigna null al campo de imagen
      const imagePath = req.file ? req.file.path.substring(4) : ""; 
  
      // Guardar el nuevo QR Code sin la URL
      const newQrCode = await QrCode.create({
        id_qr_type: req.body.id_qr_type,
        id_qr_tag: req.body.id_qr_tag,
        id_product: req.body.id_product,
        id_analytics: req.body.id_analytics,
        id_template: req.body.id_template,
        id_social_network: req.body.id_social_network,
        code: code,
        social_network_code: req.body.social_network_code,
        scan_limit: req.body.scan_limit,
        image: imagePath  // Usar el path si existe la imagen, o null si no
      });
  
      // Obtener el id generado por la base de datos
      const qrCodeId = newQrCode.id;
  
      // Generar la URL con el id generado
      const qrCodeUrlWithId = `http://localhost:8006/qr_codes/${qrCodeId}`;
      
      // Actualizar el registro con la URL generada
      newQrCode.url = qrCodeUrlWithId;
      await newQrCode.save();  // Guardar el nuevo QR con la URL actualizada
  
      return res.status(201).json(newQrCode);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al guardar el código QR.', error: error.message });
    }
  }
  
,  
  updateQrCode: async (qrCode) => {
    try {
      if (qrCode.file) {
        const [updated] = await QrCode.update({
          id_qr_type: qrCode.body.id_qr_type, 
          id_qr_tag: qrCode.body.id_qr_tag,
          id_product: qrCode.body.id_product,
          id_analytics: qrCode.body.id_analytics,
          id_template: qrCode.body.id_template,
          id_social_network: qrCode.body.id_social_network,   
          url: qrCode.body.url,
          code: qrCode.body.code, 
          social_network_code: qrCode.body.social_network_code, 
          scan_limit: qrCode.body.scan_limit,
          image: qrCode.file.path.substring(4) 
        }, {
          where: { id: qrCode.params.id }
        });
        if (updated) {
          return await QrCode.findByPk(qrCode.params.id, { include: [{ model: Product }] });
        }
      } else {
        const [updated] = await QrCode.update({
          id_qr_type: qrCode.body.id_qr_type, 
          id_qr_tag: qrCode.body.id_qr_tag,
          id_product: qrCode.body.id_product,
          id_analytics: qrCode.body.id_analytics,
          id_template: qrCode.body.id_template,
          id_social_network: qrCode.body.id_social_network,   
          url: qrCode.body.url,
          code: qrCode.body.code,
          social_network_code: qrCode.body.social_network_code,  
          scan_limit: qrCode.body.scan_limit
        }, {
          where: { id: qrCode.params.id }
        });
        if (updated) {
          return await QrCode.findByPk(qrCode.params.id, { include: [{ model: Product }] });
        }
      } 
    } catch (error) {
      console.log(error);
    }
  },

  destroyQrCode: async (id) => { 
    try {
      return await QrCode.destroy({ where: { id: id } }); 
    } catch (error) {
      console.log(error);
    }
  }
}