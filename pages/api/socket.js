// pages/api/socket.js
import { Server } from "socket.io";

let io;

export default function SocketHandler(req, res) {
  if (!io) {
    io = new Server(res.socket.server, {
      cors: {
        origin: process.env.NEXT_PUBLIC_FRONTEND_URL,
        methods: ["GET", "POST"],
      },
    });

    const roomCollaborators = {};
    const roomCode = {};

    io.on("connection", (socket) => {
      const { roomId, userId } = socket.handshake.query;

      if (!roomCollaborators[roomId]) {
        roomCollaborators[roomId] = [];
      }

      roomCollaborators[roomId].push({ userId, socketId: socket.id });

      socket.emit("codeUpdate", roomCode[roomId] || "");

      io.in(roomId).emit("collaboratorsUpdate", roomCollaborators[roomId]);

      socket.join(roomId);

      socket.on("requestInitialCode", () => {
        socket.emit("codeUpdate", roomCode[roomId] || "");
      });

      socket.on("codeUpdate", (newCode) => {
        roomCode[roomId] = newCode;
        socket.to(roomId).emit("codeUpdate", newCode);
      });

      socket.on("disconnect", () => {
        roomCollaborators[roomId] = roomCollaborators[roomId].filter(
          (collaborator) => collaborator.socketId !== socket.id
        );
        if (roomCollaborators[roomId].length === 0) {
          delete roomCollaborators[roomId];
          delete roomCode[roomId];
        } else {
          io.in(roomId).emit("collaboratorsUpdate", roomCollaborators[roomId]);
        }
      });
    });

    console.log("Socket.IO server initialized");
  } else {
    console.log("Socket.IO server already initialized");
  }

  res.end();
}
