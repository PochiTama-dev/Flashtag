import { useState, useEffect, useContext } from "react";
import styles from "./QRCodeData.module.scss";
import { AppContext } from "../../../../Context/AppContext";
import { Typography } from "../../../../components";

type QRCodeDataProps = {
  setQrCodeOptions: React.Dispatch<React.SetStateAction<{
    width: number;
    height: number;
    data: string;
    dotsOptions: { color: string; type: string; };
    cornersSquareOptions: { color: string; type: string; };
    cornersDotOptions: { color: string; type: string; };
    imageOptions: { crossOrigin: string; hideBackgroundDots: boolean; imageSize: number; margin: number; };
    image: string;
  }>>;
};
const QRCodeData: React.FC<QRCodeDataProps> = ({ setQrCodeOptions }) => {
  const { qrTags } = useContext(AppContext);
  const [type, setType] = useState("wifi");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [ssid, setSsid] = useState("");
  const [inscription, setInscription] = useState("");
  const [campaign, setCampaign] = useState("");
  const [scanLimit, setScanLimit] = useState("");
  const [passwordError, setPasswordError] = useState(false);
/*   const [urlError, setUrlError] = useState(false); */

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("qrdata") || '{}');
    if (savedData) {
      setType(savedData.type);
      setCategory(savedData.category);
      setPassword(savedData.password);
      setUrl(savedData.url);
      setSsid(savedData.ssid);
      setInscription(savedData.inscription);
      setCampaign(savedData.campaign);
      setScanLimit(savedData.scanLimit);
    }
  }, []);

  useEffect(() => {
    const data = { type, category, password,/*  url, */ ssid, inscription, campaign, scanLimit };
    localStorage.setItem("qrdata", JSON.stringify(data));
    setQrCodeOptions((prevOptions) => ({
      ...prevOptions,
      data: url || ssid,
    }));
  }, [type, category, password, /* url,  */ssid, inscription, campaign, scanLimit, setQrCodeOptions]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length < 7);
  };

/*   const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);
    setUrlError(!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(value));
  };
 */
  return (
    <form className={styles.form}>
      <Typography variant="title-mid">Datos del QR</Typography>
      <Typography variant="subtitle">Completa los datos correspondientes.</Typography>
      
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Tipo*</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="wifi">📶 Wifi</option>
            <option value="link">🔗 Link</option>
            <option value="nfc">📡 NFC</option>
          </select>
        </div>
        {type !== "wifi" ? (
          <div className={styles.field}>
            <label>Cantidad*</label>
            <input type="number" placeholder="Cantidad" required />
          </div>
        ) : (
          <div className={styles.field}>
            <label>Categoría*</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {qrTags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
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

      {type === "wifi" && (
        <div className={styles.row}>
          <div className={styles.field}>
            <label>SSID*</label>
            <input
              type="text"
              placeholder="Eje: Homework"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
              required
            />
          </div>
          <div className={styles.field}>
            <label>Inscripción*</label>
            <input
              type="text"
              value={inscription}
              onChange={(e) => setInscription(e.target.value)}
              required
            />
          </div>
        </div>
      )}

{/*       {type !== "wifi" && (
        <div className={styles.field}>
          <label>Link QR*</label>
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={handleUrlChange}
            className={urlError ? styles.error : ""}
            required
          />
          {urlError && <span className={styles.errorMessage}>Debe ser una URL válida.</span>}
        </div>
      )} */}

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