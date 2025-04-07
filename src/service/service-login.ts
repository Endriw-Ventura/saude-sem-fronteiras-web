import { User } from "@/types/user";
import { api } from "./api";

async function doLogin(email: string, password: string) {
  try {
    const { data } = await api.post('/Login/', {
      email,
      password
    });

    const token = data.token;
    localStorage.setItem('saudeToken', token);

    return data;
  } catch (error) {
    throw new Error("Falha ao realizar login");
  }
}

async function doLogout() {
  try {
    const { data } = await api.post('/Login/');
    return data;
  } catch (error) {
    throw new Error("Falha ao realizar logout");
  }
}

export const userService = { doLogin, doLogout };