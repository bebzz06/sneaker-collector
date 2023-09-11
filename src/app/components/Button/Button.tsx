"use client";
import { useState } from "react";
import { IButtonProps, BUTTON_TYPE, BUTTON_SIZE } from "./constants";
import { getButtonClassName, getIcon } from "./utils";

const Button: React.FC<IButtonProps> = ({
  text,
  customClass,
  type = BUTTON_TYPE.BUTTON,
  size,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    onClick?.();

    size === BUTTON_SIZE.SMALL && toggleState();
  };
  const toggleState = () => {
    setIsActive(!isActive);
  };
  console.log(isActive, "HERE");
  return (
    <button
      type={type}
      className={getButtonClassName(size, customClass, isActive)}
      onClick={handleClick}
    >
      {getIcon(text)}
      {text}
    </button>
  );
};

export default Button;
