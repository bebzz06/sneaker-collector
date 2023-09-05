import { FC, ReactNode } from "react";
import styles from "./styles.module.css";
import IconClose from "./IconClose";
import { useMediaQuery } from "usehooks-ts";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <div className={styles.modal_heading}>
            Add sneakers to your collection
          </div>
          <IconClose onClose={onClose} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
