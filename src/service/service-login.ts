import { destroyCookie, setCookie } from "nookies";
import { api } from "./api";
import { toast } from "react-toastify";

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
    toast.success("User Logged succesfully!");
    return data;
  } catch (error) {
    toast.error("Something went wrong!");
    throw new Error("Falha ao realizar login");
  }
}

async function doLogout(router: any) {
  try {
    destroyCookie(null, "saudeToken");
    router.refresh();
    toast.success("User Logged out succesfully!");
  } catch (error) {
    toast.error("Something went wrong!");
    throw new Error("something went wrong");
  }
}

export const loginService = { doLogin, doLogout };
