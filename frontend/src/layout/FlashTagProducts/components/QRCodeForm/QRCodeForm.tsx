/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
 
import styles from "./QRCodeForm.module.scss";

const generateRandomText = () => {
 return Math.random().toString(36).substring(2, 15);
};

interface QRCodeFormProps {
 setQrCodeOptions: (options: {
   width: number;
   height: number;
   data: string;
   dotsOptions: { color: string; type: string };
   cornersSquareOptions: { color: string; type: string };
   cornersDotOptions: { color: string; type: string };
   imageOptions: { crossOrigin: string; hideBackgroundDots: boolean; imageSize: number; margin: number };
   image: string;
 }) => void;
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

interface FileInputEvent extends React.ChangeEvent<HTMLInputElement> {
 target: HTMLInputElement & EventTarget;
}

const handleImageChange = (e: FileInputEvent) => {
  const file = e.target.files?.[0];
  if (file) {
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
  { label: "TikTok", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/640px-Tiktok_icon.svg.png" },
  { label: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/IOS_Google_icon.png/640px-IOS_Google_icon.png" },
  { label: "WhatsApp", url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
  { label: "Tripadvisor", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tripadvisor_Logo_stacked.svg/640px-Tripadvisor_Logo_stacked.svg.png" },
  { label: "Brubank", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Brubank_logo.png/640px-Brubank_logo.png" }
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
  if (typeof setQrCodeOptions === "function") {
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
  }
 };

 useEffect(() => {
  updateQrCodeOptions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [text, dotType, cornerSquareColor, cornerDotColor, cornerSquareType, cornerDotType, image, imageSize, imageMargin]);

 return (
  <div className={styles.formContainer}>
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
        setCornerSquareType(type.value);
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
    <label>
     Seleccionar un logo de red social:
     <select
      onChange={(e) => {
       setImage(e.target.value);
       updateQrCodeOptions();
      }}
      value={image}
     >
      <option value=''>Selecciona un logo</option>
      {defaultImages.map((img, index) => (
       <option key={index} value={img.url}>
        {img.label}
       </option>
      ))}
     </select>
    </label>
   </div>
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
