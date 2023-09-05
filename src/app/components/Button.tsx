"use client";
import styles from "./styles.module.css";
import PlusIcon from "./PlusIcon";

//my buttons need some props to be pased
//type either small or large
//state, isActive, disabled
//icon

interface IButtonProps {
  text: string;
  type?: "submit";
  size?: "s" | "m" | "l";
  onClick?: () => void;
  onSubmit?: string;
}

const Button = ({ text, size, type, onClick }: IButtonProps) => {
  const buttonClassName = `button ${type} ${size}`;
  const hasIcon = text === "Add new sneakers";
  const handleClick = () => {
    if (onClick) {
      onClick();
      console.log("here");
    }
  };
  return (
    <div className={styles.btn_container} onClick={handleClick}>
      {hasIcon && <PlusIcon />}
      <button type={type} className={styles.btn}>
        {text}
      </button>
    </div>
  );
};
export default Button;
