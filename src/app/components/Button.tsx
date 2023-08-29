"use client";
import React, { useState } from "react";
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
  return (
    <div className="styled_button_container">
      <div className="styled_button">{text}</div>
    </div>
  );
};

export default Button;
