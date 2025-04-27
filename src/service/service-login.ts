import { destroyCookie, setCookie } from "nookies";
import { api } from "./api";
import router from "next/router";

async function doLogin(email: string, password: string) {
  try {
    const { data } = await api.post("/Login/", {
      email,
      password,
    });

    const { token } = data;
    setCookie(null, "saudeToken", token, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return data;
  } catch (error) {
    throw new Error("Falha ao realizar login");
  }
}

async function doLogout() {
  try {
    destroyCookie(null, "saudeToken");
    router.push("/login");
  } catch (error) {
    throw new Error("Falha ao realizar logout");
  }
}

export const loginService = { doLogin, doLogout };
