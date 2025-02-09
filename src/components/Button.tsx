import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  active?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  active = false,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 uppercase font-bold text-sm border-2 border-[var(--border)] select-none cursor-default 
      ${
        active
          ? "bg-[var(--button-bg)] text-[var(--button-text)]"
          : "bg-[var(--button-text)] text-[var(--button-bg)]"
      } 
      ${className} 
      transition-all duration-100 ease-in-out
      hover:ring-2 hover:ring-offset-2 hover:ring-black`}
    >
      {label}
    </button>
  );
};

export default Button;
