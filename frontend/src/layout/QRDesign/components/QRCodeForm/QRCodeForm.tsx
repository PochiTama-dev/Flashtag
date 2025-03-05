import { useState, useEffect } from "react";
import { Typography } from "../../../../components";
import styles from "./QRCodeForm.module.scss";
import { defaultDesigns } from "./constants.ts";
import { cornerSquareTypes, dotTypes } from "./constants.ts";

interface QRCodeFormProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
  setDotType: React.Dispatch<React.SetStateAction<DotType>>;
  setQrCodeOptions: (options: {
    width: number;
    height: number;
    data: string;
    dotsOptions: { color: string; type: DotType };
    cornersSquareOptions: { color: string; type: CornerSquareType };
    cornersDotOptions: { color: string; type: CornerDotType };
    imageOptions: { crossOrigin: string; hideBackgroundDots: boolean; imageSize: number; margin: number };
    image: string;
  }) => void;
  defaultText: string;
}

type CornerSquareType = "square" | "rounded" | "classy-rounded" | "classy" | "extra-rounded" | "dot";
type DotType = "square" | "rounded" | "classy-rounded" | "classy" | "extra-rounded" | "dot";
type CornerDotType = "square" | "rounded" | "classy-rounded" | "classy" | "extra-rounded" | "dot";

const QRCodeForm = ({ setQrCodeOptions, defaultText }: QRCodeFormProps) => {
  const [text, setText] = useState(defaultText);
  const [dotType, setDotType] = useState<DotType>("square");
  const [cornerSquareColor, setCornerSquareColor] = useState("#000000");
  const [cornerDotColor, setCornerDotColor] = useState("#000000");
  const [cornerSquareType, setCornerSquareType] = useState<CornerSquareType>("square");
  const [cornerDotType, setCornerDotType] = useState<CornerDotType>("square");
  const [image, setImage] = useState("");
  const [imageSize, setImageSize] = useState(0.4);
  const [imageMargin, setImageMargin] = useState(0);
/* 
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  useEffect(() => {
    fetch("http://localhost:8006/uploads")
      .then((response) => response.json())
      .then((files) => {
        const imageUrls: string[] = files.map((file: string) => `http://localhost:8006/uploads/${file}`);
        setUploadedImages(imageUrls);
      })
      .catch((error) => console.error("Error al obtener los logos:", error));
  }, []);
 */
  const applyDesign = (design: (typeof defaultDesigns)[0]["options"]) => {
    setDotType(design.dotType as DotType);
    setCornerSquareColor(design.cornerSquareColor);
    setCornerSquareType(design.cornerSquareType as CornerSquareType);
    setCornerDotColor(design.cornerDotColor);
    setCornerDotType(design.cornerDotType as CornerDotType);
    setImage(design.image);
    setImageSize(design.imageSize);
    setImageMargin(design.imageMargin);
    updateQrCodeOptions();
  };

  const updateQrCodeOptions = (uploadedImage?: string) => {
    if (typeof setQrCodeOptions === "function") {
      const options = {
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
        image: uploadedImage || image,
      };
      setQrCodeOptions(options);
      localStorage.setItem(
        "qrdata",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("qrdata") || "{}"),
          border: options.cornersSquareOptions.type,
          color: options.cornersSquareOptions.color,
          smooth: options.dotsOptions.type,
          image: options.image,
        })
      );
    }
  };

  useEffect(() => {
    updateQrCodeOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, dotType, cornerSquareColor, cornerDotColor, cornerSquareType, cornerDotType, image, imageSize, imageMargin]);

  useEffect(() => {
    setText(defaultText); // Set defaultText to text state
  }, [defaultText]);
 
  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (file) {
  
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
          updateQrCodeOptions();
        };
        reader.readAsDataURL(file);
    
      const formData = new FormData();
      formData.append("image", file);

      const imageUrl = `http://localhost:8006/uploads/${file.name}`;
      setImage(imageUrl);
      localStorage.setItem(
        "qrdata",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("qrdata") || "{}"),
          image: imageUrl,
        })
      );

  /*     fetch("http://localhost:8006/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const uploadedImageUrl = `http://localhost:8006/uploads/${data.filename}`;
          setImage(uploadedImageUrl);
          updateQrCodeOptions(uploadedImageUrl);
        })
        .catch((error) => console.error("Error al subir la imagen:", error)); */
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.titleContainer}>
        <Typography variant='title-mid'>Personalizar QR</Typography>
        <Typography variant='subtitle'>Selecciona lo que más te guste.</Typography>
      </div>
      <select onChange={(e) => applyDesign(defaultDesigns[parseInt(e.target.value)].options)}>
        <option value=''>Selecciona un diseño predeterminado</option>
        {defaultDesigns.map((design, index) => (
          <option key={index} value={index}>
            {design.label}
          </option>
        ))}
      </select>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          updateQrCodeOptions();
        }}
        placeholder='Ingresa el texto para el QR'
      />
      <div>
        <label>Tipo de esquinas</label>
        <div className={styles.cornerSquareTypes}>
          {cornerSquareTypes.map((type) => (
            <img
              key={type.value}
              src={type.img}
              alt={type.label}
              className={cornerSquareType === type.value ? styles.selected : ""}
              onClick={() => {
                setCornerSquareType(type.value as CornerSquareType);
                updateQrCodeOptions();
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.colorPickerContainer}>
        <label>
          Color de esquinas
          <input
            type='text'
            value={cornerSquareColor}
            onChange={(e) => {
              setCornerSquareColor(e.target.value);
              updateQrCodeOptions();
            }}
            placeholder='#000000'
          />
        </label>
        <div className={styles.colorPicker}>
          {["#000000", "#595959", "#1776F2", "#C32629", "#CD17F2", "#7526C3", "#3CC326"].map((color) => (
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
      <div>
        <label>Suavizado</label>
        <div className={styles.cornerSquareTypes}>
          {dotTypes.map((type) => (
            <img
              key={type.value}
              src={type.img}
              alt={type.label}
              className={dotType === type.value ? styles.selected : ""}
              onClick={() => {
                setDotType(type.value as DotType);
                updateQrCodeOptions();
              }}
            />
          ))}
        </div>
      </div>
{/*       <div>
        <label>
          Seleccionar un logo de red social:
          <select
            onChange={(e) => {
              const selectedImage = e.target.value;
              setImage(selectedImage);
              updateQrCodeOptions();
            }}
            value={image}
          >
            {uploadedImages.map((img, index) => (
              <option key={index} value={img}>
                <img src={img} alt={`Logo ${index}`} style={{ width: 50, height: 50, marginRight: 8 }} />
                {img.split("/").pop()?.replace(/\.(png|webp)$/, "")}
              </option>
            ))}
          </select>
        </label>
      </div> */}
      <div>
        <label>
          Cargar una imagen desde tu PC:
          <input type='file' onChange={handleImageChange} />
        </label>
      </div>
    </div>
  );
};

export default QRCodeForm;