import { Wifi } from '../../db/models/Associations.js';
import CryptoJS from "crypto-js";

export default {
  getWifis: async () => {
    try {
      return await Wifi.findAll(); 
    } catch (error) {
      console.log(error); 
    }
  },

  getWifiById: async (id) => {
    try {
      return await Wifi.findByPk(id);
    } catch (error) {
      console.log(error); 
    }
  },

  saveWifi: async (wifi) => {
    try {
      return await Wifi.create({
        id: wifi.body.id,
        id_qr_code: wifi.body.id_qr_code, 
        ssid: wifi.body.ssid, 
        encryption: wifi.body.encryption, 
        password: CryptoJS.AES.encrypt(wifi.body.password, "FlashTag").toString(),
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateWifi: async (wifi) => {
    try {
      const [updated] = await Wifi.update({
        id_qr_code: wifi.body.id_qr_code, 
        ssid: wifi.body.ssid, 
        encryption: wifi.body.encryption, 
        password: CryptoJS.AES.encrypt(wifi.body.password, "FlashTag").toString(),
      }, {
        where: { id: wifi.params.id }
      });
      if (updated) {
        return await Wifi.findByPk(wifi.params.id);
      }
    } catch (error) {
      console.log(error); 
    }
  },

  destroyWifi: async (id) => { 
    try {
      return await Wifi.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error); 
    }
  }
}