import qrCodeService from "../service/qrCodeService.js";

export default {
  redirect: async (req, res) => {
    const id = req.params.id;
    try {
      const qrCode = await qrCodeService.getQrCodeById(id);
      if (qrCode) {
        res.status(200).redirect(qrCode.url);
      } else {
        res.status(404).json({ message: `El código Qr '${ id }' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en servidor al tratar de obtener la url de destino...', error });
    }
  },

}