import styles from "./styles.module.css";
interface IProps {
  onClose: () => void;
}

const IconClose: React.FC<IProps> = ({ onClose }) => {
  return (
    <svg
      className={styles.icon_close}
      onClick={onClose}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7071 5.74114C19.0976 6.13166 19.0976 6.76482 18.7071 7.15535L6.70711 19.1553C6.31658 19.5459 5.68342 19.5459 5.29289 19.1553C4.90237 18.7648 4.90237 18.1317 5.29289 17.7411L17.2929 5.74114C17.6834 5.35061 18.3166 5.35061 18.7071 5.74114Z"
        fill="#191919"
      />
      <path
        d="M5.29289 5.74114C5.68342 5.35061 6.31658 5.35061 6.70711 5.74114L18.7071 17.7411C19.0976 18.1317 19.0976 18.7648 18.7071 19.1553C18.3166 19.5459 17.6834 19.5459 17.2929 19.1553L5.29289 7.15535C4.90237 6.76482 4.90237 6.13166 5.29289 5.74114Z"
        fill="#191919"
      />
    </svg>
  );
};

export default IconClose;
