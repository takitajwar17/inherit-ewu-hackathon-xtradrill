"use client";

import { useAuth } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import CodeEditor from "@/app/components/playground/PCodeEditor";

const RoomPage = () => {
  const { roomId } = useParams();
  const { userId } = useAuth();
  const [collaborators, setCollaborators] = useState([]);
  const [code, setCode] = useState("");
  const socket = useRef(null);

  useEffect(() => {
    // Connect to Socket.IO server
    // Use this in your client components where you initialize Socket.IO
    socket.current = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL, {
      path: "/api/socket",
      query: { roomId, userId },
    });

    // Listen for collaborators
    socket.current.on("collaboratorsUpdate", (updatedCollaborators) => {
      setCollaborators(updatedCollaborators);
    });

    // Receive initial code state or updates
    socket.current.on("codeUpdate", (newCode) => {
      setCode(newCode);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [roomId, userId]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.current.emit("codeUpdate", newCode);
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Room: {roomId}</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigator.clipboard.writeText(roomId)}
            className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Copy Room Code
          </button>
        </div>
      </div>

      <CodeEditor code={code} roomId={roomId} onCodeChange={handleCodeChange} />
      {/* <ExecutionBlock code={code} /> */}
    </div>
  );
};

export default RoomPage;
