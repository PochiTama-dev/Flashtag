/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import QRCodeData from "../QRCodeData/QRCodeData";
import QRCodePreview from "../QRCodePreview/QRCodePreview";
import QRCodeDownload from "../QRCodeDownload/QRCodeDownload";
import QRCodeForm from "../QRCodeForm/QRCodeForm";
import styles from "./QRCodeStepper.module.scss";
import { Button, Typography } from "../../../../components";
import { saveQrCode, getQrCodes } from '../../../../../mockdata/qrCodeApiFetch';
import { saveWifi } from '../../../../../mockdata/wifiApiFetch';

const QRCodeStepper = () => {
  const [step, setStep] = useState(1);
  const [inputCode, setInputCode] = useState("");

  const [qrCodeOptions, setQrCodeOptions] = useState({
    width: 300,
    height: 300,
    data: "http://82.29.56.112:8006/redirect_resources", 
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
    type: "",
    category: "",
    password: "",
    url: "",
    ssid: "",
    encryption: "",
    campaign: "",
    scanLimit: "",
    cantidad: "",
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
  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 11; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

const handleSaveQrCode = async () => {
  const qrDataString = localStorage.getItem("qrdata");
  if (!qrDataString) {
    alert("No se encontraron datos de QR en el almacenamiento local.");
    return;
  }

  const qrData = JSON.parse(qrDataString);

  if (window.confirm("¿Deseas continuar y guardar el código QR?")) {
    const existingCodes = await getQrCodes();
    const lastId = existingCodes.length > 0 ? Math.max(...existingCodes.map((code: any) => code.id)) : 0;

    const saveQrCodes = async (quantity: number) => {
      for (let i = 0; i < quantity; i++) {
        let codeExists = true;
        let randomCode: string = "";

        while (codeExists) {
          randomCode = generateRandomCode();
          codeExists = existingCodes.some((code: any) => code.code === randomCode);
        }

        const newId = lastId + 1 + i;

        const qrCodeData = {
          id: newId,
          url: qrData.url,
          code: randomCode,
          data: qrData.type == 3 
            ? `WIFI:S:${qrData.ssid};T:${qrData.encryption};P:${qrData.password};;`
            : `http://82.29.56.112:8006/redirect_resources/${newId}`,
          id_qr_type: qrData.type,
          id_qr_tag: qrData.category && qrData.category.trim() !== "" ? qrData.category : 4,
          id_product: null,
          id_analytics: null,
          id_template: null,
          id_social_network: null,
          social_network_code: qrData.social_network_code || "exampleSocialNetworkCode",
          scan_limit: qrData.scanLimit || 0,
          image: qrData.image,
          border: qrData.border,
          color: qrData.color,
          smooth: qrData.smooth,
          isUsed: false,
        };

        const savedQrCode = await saveQrCode(qrCodeData);
        if (savedQrCode) {
          if (savedQrCode.id && qrData.type == 3) {
            const wifiData = {
              id: `WIFI:S:${qrData.ssid};T:${qrData.encryption};P:${qrData.password};;`,
              id_qr_code: savedQrCode.id,
              ssid: qrData.ssid,
              encryption: qrData.encryption,
              password: qrData.password,
            };
            await saveWifi(wifiData);
          }
        } else {
          alert("Error al guardar el código QR. Inténtalo de nuevo.");
          return;
        }
      }
      alert("Códigos QR guardados exitosamente.");
    };

    const quantity = qrData.type !== 3 ? parseInt(qrData.cantidad, 10) || 1 : 1;
    await saveQrCodes(quantity);

    setQrCodeOptions(prevState => ({
      ...prevState,
      data: qrData.type == 3 
        ? `WIFI:S:${qrData.ssid};T:${qrData.encryption};P:${qrData.password};;`
        : `http://82.29.56.112:8006/redirect_resources/${lastId + 1}`,
    }));
  }
};

const handleInputCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const code = e.target.value;
  setInputCode(code);

  if (code) {
    const existingCodes = await getQrCodes();
    const matchedCode = existingCodes.find((qrCode: any) => qrCode.code === code);

    if (matchedCode) {
      setQrCodeOptions(prevState => ({
        ...prevState,
        data: matchedCode.data,
      }));
    }
  }
};
const isStepOneComplete = () => {
  if (![1, 2, 3].includes(Number(formData.type))) return false;
  if (formData.type === "3" && (formData.ssid === "" || formData.encryption === "")) return false;
  return true;
};

const nextStep = () => {
  if (step === 1 && !isStepOneComplete()) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }
  setStep((prevStep) => Math.min(prevStep + 1, 3));
  if (step === 1) {
    localStorage.setItem("qrdata", JSON.stringify({
      ...formData,
      border: qrCodeOptions.cornersSquareOptions.type,
      color: qrCodeOptions.cornersSquareOptions.color,
      smooth: qrCodeOptions.dotsOptions.type,
    }));
  }
  if (step === 2) {
    handleSaveQrCode();
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
<div className={styles.inputContainer}>
  <Typography variant="subtitle">Ingresa tu código:</Typography>
  <input
    type="text"
    value={inputCode}
    onChange={handleInputCodeChange}
    className={styles.input}
  />
</div>
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
            defaultText={qrCodeOptions.data}  
          />
        )}
        {step === 3 && <QRCodeDownload qrCodeOptions={qrCodeOptions} />}
        <div className={styles.stepsButtons}>
          <Button type="white" onClick={prevStep} disabled={step === 1}>Anterior</Button>
          <Button type="green" onClick={nextStep} disabled={step === 3 || (step === 1 && !isStepOneComplete())}>Siguiente</Button>
        </div>
      </div>
    </div>
  </div>
);
};

export default QRCodeStepper;