import React, { useState } from "react";
import Button from "./Button";

const StatusButtonGroup: React.FC = () => {
  const [activeButton, setActiveButton] = useState<
    "Thinking" | "Streaming" | "Ended" | null
  >(null);

  const handleButtonClick = (status: "Thinking" | "Streaming" | "Ended") => {
    setActiveButton(status);
  };

  return (
    <div className="flex space-x-4 mt-4">
      <Button
        label="Thinking"
        onClick={() => handleButtonClick("Thinking")}
        active={activeButton === "Thinking"}
      />
      <Button
        label="Streaming"
        onClick={() => handleButtonClick("Streaming")}
        active={activeButton === "Streaming"}
      />
      <Button
        label="Ended"
        onClick={() => handleButtonClick("Ended")}
        active={activeButton === "Ended"}
      />
    </div>
  );
};

export default StatusButtonGroup;
