import { useRef } from "react";
 
import QRCodeStyling from "qr-code-styling";
import styles from "./QRCodeDownload.module.scss";

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
      <button onClick={downloadQRCode}>Descargar QR</button>
    </div>
  );
};
 
export default QRCodeDownload;
 