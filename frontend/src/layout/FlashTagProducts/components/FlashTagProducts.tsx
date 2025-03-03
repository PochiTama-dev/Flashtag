import QRCodeForm from "./QRCodeForm";

import styles from "./FlashTagProducts.module.css";
import ProductsTable from "./ProductsTable/ProductsTable";

const FlashTagProducts = () => {
  return (
    <div className={styles.container}>
      <ProductsTable />
      {/* <QRCodeForm /> */}
    </div>
  );
};

export default FlashTagProducts;
