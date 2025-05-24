import { User } from "@/types/user";
import { api } from "./api";
import { toast } from "react-toastify";

async function getUsers() {
  try {
    const { data } = await api.get("/User/");
    return data;
  } catch (error) {
    toast.error("Couldnt fetch users!");
    throw new Error("Something went wrong");
  }
}

async function getUser(id: Number) {
  try {
    const { data } = await api.get(`/User/${id}`);
    return data;
  } catch (error) {
    toast.error("Couldnt fetch user!");
    throw new Error("Something went wrong");
  }
}

async function createUser(user: User) {
  try {
    const response = await api.post("/User/", user);
    toast.success("User created successfully!");
    return response;
  } catch (error) {
    toast.error("Couldnt create user!");
    throw new Error("Something went wrong");
  }
}

async function deleteUser(id: Number) {
  try {
    const response = await api.delete(`/User/${id}`);
    toast.success("User deleted successfully!");
    return response;
  } catch (error) {
    toast.error("Couldnt delete user!");
    throw new Error("Something went wrong");
  }
}

async function editUser(id: Number, user: User) {
  try {
    const response = await api.put(`/User/${id}`, user);
    toast.success("User updated successfully!");
    return response;
  } catch (error) {
    toast.error("Couldnt update user!");
    throw new Error("Something went wrong");
  }
}

async function getLoggedUser() {
  try {
    const { data } = await api.get("/User/me");
    toast.success("User authorized!");
    return data;
  } catch (error) {
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
