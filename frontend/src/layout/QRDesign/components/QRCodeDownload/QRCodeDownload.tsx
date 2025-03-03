import { useRef } from "react";
 
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
 