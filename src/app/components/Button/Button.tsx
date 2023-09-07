"use client";
import styles from "./styles.module.css";
import PlusIcon from "./PlusIcon";

interface IButtonProps {
  text: string;
  type?: "submit";
  customClass?: string;
  onClick?: () => void;
  onSubmit?: string;
}

const { btn, mr_8 } = styles;
const Button = ({ text, customClass, type, onClick }: IButtonProps) => {
  const buttonClassName = customClass ? `${btn} ${customClass}` : `${btn}`;
  const hasIcon = text === "Add new sneakers";
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button type={type} className={buttonClassName} onClick={handleClick}>
      {hasIcon && <PlusIcon className={mr_8} />}
      {text}
    </button>
  );
};
export default Button;
