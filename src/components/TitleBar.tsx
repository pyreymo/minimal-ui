import React from "react";

interface TitleBarProps {
  title: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
  return (
    <div className="w-full p-4 border-b-2 border-[var(--border)] bg-[var(--background)] text-[var(--text)] font-bold text-xl">
      {title}
    </div>
  );
};

export default TitleBar;
