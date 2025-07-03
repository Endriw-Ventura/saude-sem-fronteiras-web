import { User } from "@/types/user";
import { api } from "./api";
import { toast } from "react-toastify";

async function getUsers() {
  try {
    const { data } = await api.get("/User/");
    return data;
  } catch {
    toast.error("Couldnt fetch users!");
    throw new Error("Something went wrong");
  }
}

async function getUser(id: number) {
  try {
    const { data } = await api.get(`/User/${id}`);
    return data;
  } catch {
    toast.error("Couldnt fetch user!");
    throw new Error("Something went wrong");
  }
}

async function createUser(user: User) {
  try {
    const response = await api.post("/User/", user);
    toast.success("User created successfully!");
    return response;
  } catch {
    toast.error("Couldnt create user!");
    throw new Error("Something went wrong");
  }
}

async function deleteUser(id: number) {
  try {
    const response = await api.delete(`/User/${id}`);
    toast.success("User deleted successfully!");
    return response;
  } catch {
    toast.error("Couldnt delete user!");
    throw new Error("Something went wrong");
  }
}

async function editUser(id: number, user: User) {
  try {
    const response = await api.put(`/User/${id}`, user);
    toast.success("User updated successfully!");
    return response;
  } catch {
    toast.error("Couldnt update user!");
    throw new Error("Something went wrong");
  }
}

async function getLoggedUser() {
  try {
    const { data } = await api.get("/User/me");
    toast.success("User authorized!");
    return data;
  } catch {
    toast.error("Couldnt authorize user!");
    throw new Error("Something went wrong");
  }
}

export const userService = {
  getUsers,
  getUser,
  createUser,
  editUser,
  deleteUser,
  getLoggedUser,
};
