import { useState, useEffect } from "react";
import styles from "./QRCodeData.module.scss";
import { categorias } from "./constants";

const QRCodeData = () => {
  const [type, setType] = useState("wifi");
  const [category, setCategory] = useState("cartel");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [ssid, setSsid] = useState("");
  const [inscription, setInscription] = useState("");
  const [campaign, setCampaign] = useState("");
  const [scanLimit, setScanLimit] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [urlError, setUrlError] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("qrdata"));
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
    const data = { type, category, password, url, ssid, inscription, campaign, scanLimit };
    localStorage.setItem("qrdata", JSON.stringify(data));
  }, [type, category, password, url, ssid, inscription, campaign, scanLimit]);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length < 7);
  };

  const handleUrlChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    setUrlError(!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(value));
  };

  return (
    <form className={styles.form}>
      <h2>Datos del QR</h2>
      <p>Completa los datos correspondientes.</p>
      
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
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.label}
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

      <div className={styles.field}>
        <label>Campaña*</label>
        <input
          type="text"
          placeholder="Nombre de la campaña"
          value={campaign}
          onChange={(e) => setCampaign(e.target.value)}
          required
        />
      </div>

      {type !== "wifi" && (
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
