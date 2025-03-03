import { useState, useEffect } from "react";
import QRCodeData from "../QRCodeData/QRCodeData";
import QRCodePreview from "../QRCodePreview/QRCodePreview";
import QRCodeDownload from "../QRCodeDownload/QRCodeDownload";
import QRCodeForm from "../QRCodeForm/QRCodeForm";
import styles from "./QRCodeStepper.module.scss";
import { Button, Typography } from "../../../../components";

const QRCodeStepper = () => {
  const [step, setStep] = useState(1);
  const [qrCodeOptions, setQrCodeOptions] = useState({
    width: 300,
    height: 300,
    data: "default text", // FORMA DEFAULT DEL QR, ACA VA LA URL DEL BACK 
    dotsOptions: { color: "#000000", type: "square" },
    cornersSquareOptions: { color: "#000000", type: "square" },
    cornersDotOptions: { color: "#000000", type: "square" },
    imageOptions: {
      crossOrigin: "anonymous",
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 0,
    },
    image: "",
  });

  const [formData, setFormData] = useState({
    type: "wifi",
    category: "",
    password: "",
    url: "",
    ssid: "",
    inscription: "",
    campaign: "",
    scanLimit: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("qrdata") || '{}');
    if (savedData) {
      setFormData(savedData);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem("qrdata");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 3));
    if (step === 1) {
      localStorage.setItem("qrdata", JSON.stringify(formData));
    }
  };

  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

 

  return (
    <div className={styles.stepper}>
      <div className={styles.qrCodeContainer}>
        <Typography variant="title">Previsualización</Typography>
        <Typography variant="subtitle">Escanea este código QR con tu dispositivo.</Typography>
        <div className={styles.qrCode}>
          <QRCodePreview options={qrCodeOptions} />
        </div>
      </div>
      <div>
        <div className={styles.stepsContainer}>
          <div className={`${styles.step} ${step === 1 ? styles.active : ""}`}>Datos</div>
          <div className={`${styles.step} ${step === 2 ? styles.active : ""}`}>Personalizar</div>
          <div className={`${styles.step} ${step === 3 ? styles.active : ""}`}>Listo</div>
        </div>
        <div className={styles.stepContent}>
          {step === 1 && <QRCodeData setFormData={setFormData} />}
          {step === 2 && (
            <QRCodeForm
              setQrCodeOptions={setQrCodeOptions}
              setText={() => {}}
              setDotType={() => {}}
              defaultText={qrCodeOptions.data} // Pass defaultText prop
            />
          )}
          {step === 3 && <QRCodeDownload qrCodeOptions={qrCodeOptions} />}
          <div className={styles.stepsButtons}>
            <Button type="white" onClick={prevStep} disabled={step === 1}>Anterior</Button>
            <Button type="green" onClick={nextStep} disabled={step === 3}>Siguiente</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeStepper;