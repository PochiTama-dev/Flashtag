import { QrCode, Product } from '../../db/models/Associations.js';
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
saveQrCode: async (qrCode) => {
  try {
   
    return await QrCode.create({
     id: qrCode.body.id,
      id_qr_type: qrCode.body.id_qr_type, 
      id_qr_tag: qrCode.body.id_qr_tag,
      id_product: /* qrCode.body.id_product, */ null,
      id_analytics: /* qrCode.body.id_analytics */ null,
      id_template: /* qrCode.body.id_template */ null,
      id_social_network: /* qrCode.body.id_social_network */ null, 
      borde: qrCode.body.border,  
      color: qrCode.body.color,
      smooth: qrCode.body.smooth,
      url: qrCode.body.url,
      code: qrCode.body.code,
      social_network_code: qrCode.body.social_network_code,  
      scan_limit: qrCode.body.scan_limit,
      image: qrCode.body.image,
      data: qrCode.body.data,
      isUsed: qrCode.body.isUsed
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
},


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
        borde: qrCode.body.border,
        color: qrCode.body.color,
        smooth: qrCode.body.smooth,
        url: qrCode.body.url,
        code: qrCode.body.code,
        social_network_code: qrCode.body.social_network_code,
        scan_limit: qrCode.body.scan_limit,
        image: qrCode.file.path.substring(4),
        data: qrCode.body.data,
        isUsed: qrCode.body.isUsed
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
        borde: qrCode.body.border,
        color: qrCode.body.color,
        smooth: qrCode.body.smooth,
        url: qrCode.body.url,
        code: qrCode.body.code,
        social_network_code: qrCode.body.social_network_code,
        scan_limit: qrCode.body.scan_limit,
        image: qrCode.body.image,
        data: qrCode.body.data,
        isUsed: qrCode.body.isUsed
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