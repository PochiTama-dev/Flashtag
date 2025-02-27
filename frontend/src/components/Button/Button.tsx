import styles from "./Button.module.scss";

import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  type: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({ type, children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default Button;
