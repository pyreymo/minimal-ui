import React, { useState } from "react";
import Button from "./Button";

interface ChatInputProps {
  onSubmit: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSubmit(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center space-x-4 mt-4">
      <input
        type="text"
        className="w-full px-4 py-2 border-2 border-[var(--border)] bg-[var(--background)] text-[var(--text)] select-none"
        placeholder="Start a new thread"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button label="Send" onClick={handleSend} active></Button>
    </div>
  );
};

export default ChatInput;
