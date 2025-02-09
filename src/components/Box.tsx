import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  frameless?: boolean;
}

const Box: React.FC<BoxProps> = ({
  children,
  className = "",
  center = false,
  frameless = false,
}) => {
  return (
    <div
      className={`${
        frameless ? "" : "border-2 border-[var(--border)]"
      } ${
        center ? "flex justify-center items-center" : ""
      } ${className} bg-[var(--background)] text-[var(--text)]`}
    >
      {children}
    </div>
  );
};

export default Box;
