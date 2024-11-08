"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Playground = () => {
  const router = useRouter();
  const [roomCode, setRoomCode] = useState("");

  const generateRoomCode = () => {
    return uuidv4().slice(0, 7).toUpperCase();
  };

  const handleCreateRoom = () => {
    const newRoomCode = generateRoomCode();
    router.push(`/playground/${newRoomCode}`);
  };

  const handleJoinRoom = () => {
    if (roomCode.trim().length === 7) {
      router.push(`/playground/${roomCode}`);
    } else {
      alert("Please enter a valid 7-character room code.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        Collaborative Coding Playground
      </h1>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={handleCreateRoom}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Create New Room
        </button>

        <div className="flex flex-row items-center space-x-2">
          <input
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            placeholder="Enter 7-character Room Code"
            className="px-4 py-2 border border-gray-300 rounded w-64"
          />
          <button
            onClick={handleJoinRoom}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playground;
