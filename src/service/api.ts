import axios from "axios";
import { NEXT_PUBLIC_API_URL } from '@/../env.dev'

export const api = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
  headers: {
  "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("saudeToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});