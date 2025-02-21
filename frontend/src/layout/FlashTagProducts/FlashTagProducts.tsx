 
import { QRCodeStepper, QRCodePreview } from "./components";

const FlashTagProducts = () => {
    return (
        <div>
            <h1 style={{color:'#333'}}>Flash Tag Products</h1>
            <QRCodePreview />
            <QRCodeStepper />
        </div>
    );
};

export default FlashTagProducts;
