import { useState, useRef, useEffect, useCallback } from "react";
import QRCodeStyling from "qr-code-styling";
import { DotType, CornerSquareType, CornerDotType } from "qr-code-styling/lib/types";
import QRCodeForm from "../QRCodeForm/QRCodeForm";
import QRCodePreview from "../QRCodePreview/QRCodePreview";
import styles from "./QRCodeEditor.module.scss";
 
const QRCodeEditor = () => {
  const [text, setText] = useState("");
  const [dotType, setDotType] = useState<DotType>("square");
  const [cornerSquareColor, setCornerSquareColor] = useState("#000000");
  const [cornerDotColor, setCornerDotColor] = useState("#000000");
  const [cornerSquareType, setCornerSquareType] = useState<CornerSquareType>("square");
  const [cornerDotType, setCornerDotType] = useState<CornerDotType>("square");
  const [image, setImage] = useState("");
  const [imageSize, setImageSize] = useState(0.4);
  const [imageMargin, setImageMargin] = useState(0);
  const qrCodeRef = useRef(null);
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);

  const createQRCode = useCallback(() => {
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
      image: image,
    };

    if (qrCodeInstance.current) {
      qrCodeInstance.current.update(options);
    } else {
      qrCodeInstance.current = new QRCodeStyling(options);
      if (qrCodeRef.current) {
        qrCodeInstance.current.append(qrCodeRef.current);
      }
    }
  }, [
    text,
    dotType,
    cornerSquareColor,
    cornerDotColor,
    cornerSquareType,
    cornerDotType,
    image,
    imageSize,
    imageMargin,
  ]);

  useEffect(() => {
    createQRCode();
  }, [
    text,
    dotType,
    cornerSquareColor,
    cornerDotColor,
    cornerSquareType,
    cornerDotType,
    image,
    imageSize,
    imageMargin,
    createQRCode,
  ]);

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
    image: image,
  };

  return (
    <div className={styles.wrapper}>
      <QRCodePreview options={options} />
      <QRCodeForm
        setText={setText}
        setDotType={setDotType}
        setCornerSquareColor={setCornerSquareColor}
        setCornerDotColor={setCornerDotColor}
        setCornerSquareType={setCornerSquareType}
        setCornerDotType={setCornerDotType}
        setImage={setImage}
        setImageSize={setImageSize}
        setImageMargin={setImageMargin}
      />
    </div>
  );
};

export default QRCodeEditor;
