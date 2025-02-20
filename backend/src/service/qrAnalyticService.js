import { QrAnalytic, QrCode } from '../../db/models/Associations.js';

export default {
  getQrAnalytics: async () => {
    try {
      return await QrAnalytic.findAll({ include: { model: QrCode } });
    } catch (error) {
      console.log(error); 
    }
  },

  getQrAnalyticById: async (id) => {
    try {
      return await QrAnalytic.findByPk(id, { include: { model: QrCode } });
    } catch (error) {
      console.log(error); 
    }
  },

  getQrAnalyticByQrCode: async (id) => {
    try {
      return await QrAnalytic.findAll({ where: { id_qr_code: id }});
    } catch (error) {
      console.log(error);
    }
  },

  saveQrAnalytic: async (qrAnalytic) => {
    try {
      return await QrAnalytic.create({
        id_qr_code: qrAnalytic.body.id_qr_code, 
        date: qrAnalytic.body.date,
        device: qrAnalytic.body.device,
        browser: qrAnalytic.body.browser,
        operating_system: qrAnalytic.body.operating_system,   
        location: qrAnalytic.body.location 
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateQrAnalytic: async (qrAnalytic) => {
    try {
      const [updated] = await QrAnalytic.update({
        date: qrAnalytic.body.date,
        device: qrAnalytic.body.device,
        browser: qrAnalytic.body.browser,
        operating_system: qrAnalytic.body.operating_system,   
        location: qrAnalytic.body.location 
      }, {
      where: { id: qrAnalytic.params.id }
      });
      if (updated) {
      return await QrAnalytic.findByPk(qrAnalytic.params.id, { include: [{ model: QrCode }] });
      }
    } catch (error) {
      console.log(error); 
    }
  },

  destroyQrAnalytic: async (id) => { 
    try {
      return await QrAnalytic.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
}