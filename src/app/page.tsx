"use client";

import Box from "@/components/Box";
import ChatInput from "@/components/ChatInput";
import StatusButtonGroup from "@/components/StatusButtonGroup";
import TitleBar from "@/components/TitleBar";

export default function Home() {
  const handleChatSubmit = (message: string) => {
    console.log("New message:", message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--text)]">
      {/* Outer Box */}
      <Box className="w-full max-w-3xl">
        <TitleBar title="Untitled" />

        {/* Main Content Box */}
        <Box className="p-4" frameless>
          {/* Greeting Box */}
          <Box className="h-64" center>
            <p className="text-lg text-[var(--text)] text-center font-sans">
              Hello, world! <br />
              Please select{" "}
              <a style={{ color: "var(--link)" }} href="#">
                a model
              </a>{" "}
              and send your message.
            </p>
          </Box>

          {/* Status Button Group */}
          <Box frameless center>
            <StatusButtonGroup />
          </Box>

          <ChatInput onSubmit={handleChatSubmit} />
        </Box>
      </Box>
    </div>
  );
}
