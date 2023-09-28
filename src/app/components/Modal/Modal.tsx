import { FC, ReactNode } from "react";
import styles from "./styles.module.css";
import IconClose from "./IconClose";
import { useNotifyModalContext } from "lib/NotifyModalContext";
interface IModalProps {
  children: ReactNode;
}
const { modal_overlay, modal, modal_header, modal_heading } = styles;

const Modal: FC<IModalProps> = ({ children }) => {
  const { isModalOpen, toggleModalDisplay } = useNotifyModalContext();
  if (!isModalOpen) return null;
  return (
    <div className={modal_overlay}>
      <div className={modal}>
        <div className={modal_header}>
          <div className={modal_heading}>Add sneakers to your collection</div>
          <IconClose onClose={toggleModalDisplay} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
