"use client";
import styles from "./styles.module.css";
import PlusIcon from "./PlusIcon";

//my buttons need some props to be pased
//type either small or large
//state, isActive, disabled
//icon

interface IButtonProps {
  text: string;
  type?: "primary" | "secondary";
  size?: "s" | "m" | "l";
}

const Button = ({ text, size = "l", type = "primary" }: IButtonProps) => {
  const buttonClassName = `button ${type} ${size}`;
  const hasIcon = text === "Add new sneakers";
  return (
    <div className={styles.btn_container}>
      {hasIcon && <PlusIcon />}
      <div className={styles.ml_8}>{text}</div>
    </div>
  );
};
export default Button;
