import { io } from "socket.io-client";
import { host } from "../constants/host-url";

export const socket = io(host);
