"use client";
import { IButtonProps, BUTTON_TYPE } from "./constants";
import { getButtonClassName, getIcon } from "./utils";

const Button: React.FC<IButtonProps> = ({
  text,
  customClass,
  type = BUTTON_TYPE.BUTTON,
  size,
  isActive = true,
  isDisabled = false,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.();
  };
  return (
    <button
      type={type}
      className={getButtonClassName(size, customClass, isActive)}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {getIcon(text)}
      {text}
    </button>
  );
};

export default Button;
