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

socket.on("connection", () => {
  console.log("connected to server");

  socket.on("connect_error", (err) => {
    console.log(err.message);
  });

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });
  
  socket.on("new-message", (data) => {
    store.dispatch(setNewMessage(data.message, data.sender));
  });
});

export default socket;
