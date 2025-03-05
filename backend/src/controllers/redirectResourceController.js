import qrCodeService from "../service/qrCodeService.js";

export default {
  redirect: async (req, res) => {
    const id = req.params.id;
    try {
      // Obtener el QR Code por su ID
      const qrCode = await qrCodeService.getQrCodeById(id);
      
      // Si el QR Code existe, redirigir a la URL
      if (qrCode && qrCode.url) {
        return res.status(200).redirect(qrCode.url);
      } else {
        return res.status(404).json({ message: `El código QR con ID '${id}' no se encuentra en la base de datos.` });
      }
    } catch (error) {
      // Manejo de errores si ocurre algo en el servidor
      console.error('Error en redirección de QR:', error);
      return res.status(500).json({ message: 'Error en servidor al tratar de obtener la url de destino...', error });
    }
  },
};
