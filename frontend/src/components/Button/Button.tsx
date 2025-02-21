 
import styles from "./Button.module.scss";

import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  type: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};

 
Button.defaultProps = {
  onClick: () => {},
};

export default Button;
