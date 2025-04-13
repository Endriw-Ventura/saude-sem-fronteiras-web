import User from "@/types/user";
import { api } from "./api";

async function getUsers() {
  try {
    const { data } = await api.get('/User/');
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar usuário");
  }
}

async function getUser(id: Number) {
  try {
    const { data } = await api.get(`/User/${id}`);
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar usuários");
  }
}

async function createUser(user: User){
    try{
        const response = await api.post("/User/", user);
        return response;
    }catch(error){
        throw new Error("Falha ao criar usuário")
    }
}

async function deleteUser(id: Number){
    try{
        const response = await api.delete(`/User/${id}`);
        return response;
    }catch(error){
        throw new Error("Falha ao criar usuário")
    }
}

async function editUser(id: Number, user: User){
    try{
        const response = await api.put(`/User/${id}`, user);
        return response;
    }catch(error){
        throw new Error("Falha ao criar usuário")
    }
}

export const userService = { getUsers, getUser, createUser, editUser, deleteUser };