import http from "http";
import { Server as SocketIOServer } from "socket.io";

export const initSocketServer = (server: http.Server) => {
  console.log("Initializing Socket.IO server...");
  const io = new SocketIOServer(server);

  io.on("connection", (socket) => {
    console.log("A user connected with ID:", socket.id);


    socket.on("notification", (data) => {

      io.emit("newNotification", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected with ID:", socket.id);
    });
  });
};