import axios from "axios";
import { AUTH_URL } from "./url";

export const auth = axios.create({
  baseURL: AUTH_URL,
  headers: {
    Accept: "application/json",
    //   Authorization: `Bearer: ${token}`,
  },
});
