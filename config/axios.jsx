import axios from "axios";
import { AUTH_URL } from "./url";

export const auth = (token) => {
  return axios.create({
    baseURL: AUTH_URL,
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  });
};
