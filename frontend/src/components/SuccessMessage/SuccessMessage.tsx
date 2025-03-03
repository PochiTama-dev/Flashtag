import React, { useEffect } from 'react';
import styles from './SuccessMessage.module.scss';
import Button from '../Button/Button';
import Typography from '../Typography';
 
interface SuccessMessageProps {
    isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const SuccessMessage = ({ children, onClose, isOpen }: SuccessMessageProps) => {
    useEffect(() => {
        console.log('SuccessMessage isOpen:', isOpen);
    }, [isOpen]);

    if (!isOpen) return null;
    return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
            <img src="/assets/flash-logo.png" alt="" />
          {children}
        </div>
        <Button type='primary' onClick={onClose}> <Typography variant='normal'>Ir al panel </Typography>  </Button>
      </div>
    </div>
  );
};

export default SuccessMessage;
