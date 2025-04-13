import { api } from "./api";
import router from "next/router";
import { useUser } from "@/hooks/useUser";

const { setUser } = useUser();

async function doLogin(email: string, password: string) {
  try {
    const { data } = await api.post("/Login/", {
      email,
      password,
    });

    const token = data.token;
    localStorage.setItem("saudeToken", token);
    setUser(data);
    return data;
  } catch (error) {
    throw new Error("Falha ao realizar login");
  }
}

async function doLogout() {
  try {
    localStorage.removeItem("saudeToken");
    setUser(null);
    router.push("/login");
  } catch (error) {
    throw new Error("Falha ao realizar logout");
  }
}

export const loginService = { doLogin, doLogout };
