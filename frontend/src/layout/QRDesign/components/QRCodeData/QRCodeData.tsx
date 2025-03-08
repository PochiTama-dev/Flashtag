import { useState, useEffect, useContext } from "react";
import styles from "./QRCodeData.module.scss";
import { AppContext } from "../../../../Context/AppContext";
import { Typography } from "../../../../components";

type QRCodeDataProps = {
  setFormData: React.Dispatch<React.SetStateAction<{
    type: string;
    category: string;
    password: string;
    url: string;
    ssid: string;
    encryption: string;
    campaign: string;
    scanLimit: string;
    cantidad: string;
  }>>;
};

const encryptionTypes = ["WEP", "WPA", "WPA2", "nopass"];

const QRCodeData: React.FC<QRCodeDataProps> = ({ setFormData }) => {
  const { qrTypes, qrTags } = useContext(AppContext);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [ssid, setSsid] = useState("");
  const [encryption, setEncryption] = useState("");
  const [campaign, setCampaign] = useState("");
  const [scanLimit, setScanLimit] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("qrdata") || '{}');
    if (savedData) {
      setType(savedData.type || "");
      setCategory(savedData.category || "");
      setPassword(savedData.password || "");
      setUrl(savedData.url || "");
      setSsid(savedData.ssid || "");
      setEncryption(savedData.encryption || "");
      setCampaign(savedData.campaign || "");
      setScanLimit(savedData.scanLimit || "");
      setQuantity(savedData.cantidad || "");
    }
  }, []);

  useEffect(() => {
    setFormData({ 
      type, 
      category, 
      password, 
      url, 
      ssid, 
      encryption, 
      campaign, 
      scanLimit,
      cantidad: quantity 
    });
  }, [type, category, password, url, ssid, encryption, campaign, scanLimit, quantity, setFormData]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length < 7);
  };

  return (
    <form className={styles.form}>
      <Typography variant="title-mid">Datos del QR</Typography>
      <Typography variant="subtitle">Completa los datos correspondientes.</Typography>
      
      <div className={styles.row}>
        <div className={styles.field}>
                <label>Tipo*</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="" disabled>Selecciona un tipo</option>
            {qrTypes.filter(qrType => qrType.id != "4").map((qrType) => (
              <option key={qrType.id} value={qrType.id}>
                {qrType.name}
              </option>
            ))}
          </select>
        </div>
        {type !== "3" ? (
          <div className={styles.field}>
            <label>Cantidad*</label>
            <input
              type="number"
              placeholder="Cantidad"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        ) : (
          <div className={styles.field}>
            <label>Categoría*</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled>Selecciona una categoría</option>
              {qrTags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label>Nombre*</label>
        <input type="text" placeholder="Colocar un nombre" required />
      </div>

      {type === "3" && (
        <div className={styles.row}>
          <div className={styles.field}>
            <label>SSID*</label>
            <input
              type="text"
              placeholder="Ej: Homework"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
              required
            />
          </div>
          <div className={styles.field}>
            <label>Encryption*</label>
            <select value={encryption} onChange={(e) => setEncryption(e.target.value)} required>
              <option value="" disabled>Selecciona tipo de seguridad</option>
              {encryptionTypes.map((enc) => (
                <option key={enc} value={enc}>{enc}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Escaneo límite</label>
          <input
            type="number"
            value={scanLimit}
            onChange={(e) => setScanLimit(e.target.value)}
          />
        </div>
        <div className={styles.fieldPassword}>
          <label>Contraseña</label>
          <div className={styles.passwordWrapper}>
            <input
              type="password"
              placeholder="Escribir contraseña"
              value={password}
              onChange={handlePasswordChange}
              className={passwordError ? styles.error : ""}
            />
          </div>
          {passwordError && <span className={styles.errorMessage}>Debe contener al menos 7 caracteres.</span>}
        </div>
      </div>
    </form>
  );
};

export default QRCodeData;