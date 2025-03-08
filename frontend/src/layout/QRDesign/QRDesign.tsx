import { QRCodeStepper,  /*  QRCodePreview  */  } from "./components";

const QRDesign =() => {
 /*     const qrCodeOptions = {
        width: 300,
        height: 300,
        data: "https://example.com"
    };  
 */
    return (
        <div>
            <h1 style={{color:'#333'}}>Flash Tag Products</h1>
   {/*          <QRCodePreview options={qrCodeOptions} />   */}
            <QRCodeStepper />
        </div>
    );
};

export default QRDesign;
