import { FC, ReactNode } from "react";
import styles from "./styles.module.css";
import IconClose from "./IconClose";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const { modal_overlay, modal, modal_header, modal_heading } = styles;

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={modal_overlay}>
      <div className={modal}>
        <div className={modal_header}>
          <div className={modal_heading}>Add sneakers to your collection</div>
          <IconClose onClose={onClose} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
