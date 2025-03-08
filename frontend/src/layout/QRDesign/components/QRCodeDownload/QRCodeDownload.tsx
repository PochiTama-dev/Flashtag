import { useRef, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import styles from "./QRCodeDownload.module.scss";
import { Button } from "../../../../components";

interface QRCodeOptions {
  width: number;
  height: number;
  data: string;
}

const QRCodeDownload = ({ qrCodeOptions }: { qrCodeOptions: QRCodeOptions }) => {
  const qrCodeInstance = useRef(new QRCodeStyling(qrCodeOptions));
  const qrCodeRef = useRef<HTMLDivElement>(null);

  // Actualizar QR cuando cambian las opciones
  useEffect(() => {
    if (qrCodeInstance.current && qrCodeRef.current) {
      qrCodeInstance.current.update(qrCodeOptions);
      qrCodeInstance.current.append(qrCodeRef.current);
    }
  }, [qrCodeOptions]);

  const downloadQRCode = () => {
    qrCodeInstance.current.download({ name: "qr-code", extension: "png" });
  };

  return (
    <div className={styles.downloadContainer}>
 
      <Button type='white' onClick={downloadQRCode}>Descargar QR</Button>
    </div>
  );
};

export default QRCodeDownload;
