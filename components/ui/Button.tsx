import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-tr from-[#2C5A6F] to-[#051016] text-white py-2 rounded-3xl font-semibold transition cursor-pointer hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
