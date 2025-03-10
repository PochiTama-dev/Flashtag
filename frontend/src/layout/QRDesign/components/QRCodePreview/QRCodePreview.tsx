import { useRef, useEffect } from "react";
 
import QRCodeStyling from "qr-code-styling";
import styles from "./QRCodePreview.module.scss";

interface QRCodeOptions {
 
  width: number;
  height: number;
  data: string;
 
}

const QRCodePreview = ({ options }: { options: QRCodeOptions }) => {
  const qrCodeRef = useRef(null);
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (qrCodeInstance.current) {
      qrCodeInstance.current.update(options);
    } else {
      qrCodeInstance.current = new QRCodeStyling(options);
      if (qrCodeRef.current) {
        qrCodeInstance.current.append(qrCodeRef.current);
      }
    }
  }, [options]);

  return <div ref={qrCodeRef} className={styles.qrCodeContainer}></div>;
};
 

export default QRCodePreview;

