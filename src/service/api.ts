import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/../env.dev";
import { parseCookies } from "nookies";

export const api = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const { saudeToken } = parseCookies();
  if (saudeToken) {
    config.headers.Authorization = `Bearer ${saudeToken}`;
  }
  return config;
});
