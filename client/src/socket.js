import {io} from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser
} from "./store/conversations";

const socket = io(window.location.origin,
  { transports: ["polling"] },
  { reconnectionAttempts: 5 });

socket.on("connect", () => {
    console.log("connected to server!");
    console.log(socket.id)

  socket.on("add-online-user", (user) => {
    const id = user.id;
    const socketId = user.socketId;
    store.dispatch(addOnlineUser(id, socketId));
  });

  socket.on("remove-offline-user", (user) => {
    store.dispatch(removeOfflineUser(user));
  });
  
  socket.on("new-message", (data) => {
    store.dispatch(setNewMessage(data.message, data.sender));
  });
});

export default socket;
