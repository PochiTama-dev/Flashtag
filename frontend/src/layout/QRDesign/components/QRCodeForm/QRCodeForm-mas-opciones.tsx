/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
 
import styles from "./QRCodeForm.module.scss";
import { Typography } from "../../../../components";
const generateRandomText = () => {
  return Math.random().toString(36).substring(2, 15);
};

interface QRCodeFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setQrCodeOptions: (options: any) => void;
}

const QRCodeForm = ({ setQrCodeOptions }: QRCodeFormProps) => {
  const [text, setText] = useState(generateRandomText());
  const [dotType, setDotType] = useState("square");
  const [cornerSquareColor, setCornerSquareColor] = useState("#000000");
  const [cornerDotColor, setCornerDotColor] = useState("#000000");
  const [cornerSquareType, setCornerSquareType] = useState("square");
  const [cornerDotType, setCornerDotType] = useState("square");
  const [image, setImage] = useState("");
  const [imageSize, setImageSize] = useState(0.4);
  const [imageMargin, setImageMargin] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const defaultImages = [
    { label: "Facebook", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
    { label: "X", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Twitter_X.png/640px-Twitter_X.png" },
    { label: "Instagram", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" },
  ];

  const cornerSquareTypes = [
      { value: "square", img: "assets/formasQR/1.png", label: "Square" },
      { value: "rounded", img: "assets/formasQR/2.png", label: "Rounded" },
      { value: "classy-rounded", img: "assets/formasQR/3.png", label: "Classy Rounded" },
      { value: "classy", img: "assets/formasQR/4.png", label: "Classy" },
      { value: "extra-rounded", img: "assets/formasQR/5.png", label: "Extra Rounded" },
      { value: "dot", img: "assets/formasQR/6.png", label: "Dot" },
  ];

  const updateQrCodeOptions = () => {
    if (typeof setQrCodeOptions === 'function') {
      setQrCodeOptions({
        width: 300,
        height: 300,
        data: text,
        dotsOptions: { color: "#000000", type: dotType },
        cornersSquareOptions: { color: cornerSquareColor, type: cornerSquareType },
        cornersDotOptions: { color: cornerDotColor, type: cornerDotType },
        imageOptions: {
          crossOrigin: "anonymous",
          hideBackgroundDots: true,
          imageSize: imageSize,
          margin: imageMargin,
        },
        image: image,
      });
    } else {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  ""
    }
  };

  useEffect(() => {
    updateQrCodeOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, dotType, cornerSquareColor, cornerDotColor, cornerSquareType, cornerDotType, image, imageSize, imageMargin]);

  return (
    <div className={styles.formContainer}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          updateQrCodeOptions();
        }}
        placeholder="Ingresa el texto para el QR"
      />
{/*       <div>
        <label>
          Tipo de puntos:
          <select value={dotType} onChange={(e) => {
            setDotType(e.target.value);
            updateQrCodeOptions();
          }}>
            <option value="square">Cuadrado</option>
            <option value="rounded">Redondeado</option>
            <option value="dots">Puntos</option>
            <option value="classy">Elegante</option>
            <option value="classy-rounded">Elegante redondeado</option>
            <option value="extra-rounded">Extra redondeado</option>
          </select>
        </label>
      </div> */}
    
      <div>
        <Typography variant="normal-bold">Tipo de esquinas</Typography>
        <div className={styles.cornerSquareTypes}>
          {cornerSquareTypes.map((type) => (
            <img
              key={type.value}
              src={type.img}
              alt={type.label}
              className={cornerSquareType === type.value ? styles.selected : ""}
              onClick={() => {
                setCornerSquareType(type.value);
                updateQrCodeOptions();
              }}
            />
          ))}
        </div>
      </div>
       <div>
        <Typography variant="normal-bold">Color de esquinas</Typography>
        <input
          type="text"
          value={cornerSquareColor}
          onChange={(e) => {
            setCornerSquareColor(e.target.value);
            updateQrCodeOptions();
          }}
          placeholder="#000000"
        />
        <div className={styles.colorPicker}>
          {["#000000",   "#595959", "#1776F2", "#C32629", "#CD17F2", "#7526C3", "#3CC326"].map((color) => (
            <div
              key={color}
              className={styles.colorCircle}
              style={{ backgroundColor: color }}
              onClick={() => {
                setCornerSquareColor(color);
                updateQrCodeOptions();
              }}
            />
          ))}
        </div>
      </div>
{/*       <div>
        <label>
          Color de las esquinas con puntos:
          <input
            type="color"
            value={cornerDotColor}
            onChange={(e) => {
              setCornerDotColor(e.target.value);
              updateQrCodeOptions();
            }}
          />
        </label>
      </div>
      <div>
        <label>Tipo de esquinas con puntos:</label>
        <div className={styles.cornerSquareTypes}>
          {cornerSquareTypes.map((type) => (
            <img
              key={type.value}
              src={type.img}
              alt={type.label}
              className={cornerDotType === type.value ? styles.selected : ""}
              onClick={() => {
                setCornerDotType(type.value);
                updateQrCodeOptions();
              }}
            />
          ))}
        </div>
      </div> */}
      <div>
        <Typography variant="normal-bold">Seleccionar un logo de red social:</Typography>
        <select onChange={(e) => {
          setImage(e.target.value);
          updateQrCodeOptions();
        }} value={image}>
          <option value="">Selecciona un logo</option>
          {defaultImages.map((img, index) => (
            <option key={index} value={img.url}>
              {img.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Typography variant="normal-bold">Cargar una imagen desde tu PC:</Typography>
        <input type="file" onChange={handleImageChange} />
      </div>
     {/*  <div>
        <label>
          Tamaño de la imagen:
          <input
            type="number"
            value={imageSize}
            min="0.1"
            max="0.5"
            step="0.1"
            onChange={(e) => {
              setImageSize(e.target.value);
              updateQrCodeOptions();
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Margen de la imagen:
          <input
            type="number"
            value={imageMargin}
            min="0"
            onChange={(e) => {
              setImageMargin(e.target.value);
              updateQrCodeOptions();
            }}
          />
        </label>
      </div> */}
    </div>
  );
};
 

export default QRCodeForm;
