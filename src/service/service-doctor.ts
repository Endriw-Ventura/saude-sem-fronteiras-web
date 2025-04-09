import Doctor from "@/types/doctor";
import { api } from "./api";

async function getDoctors() {
  try {
    const { data } = await api.get(`/Doctor`);
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar usuário");
  }
}

async function getDoctor(id: Number) {
  try {
    const { data } = await api.get(`/Doctor/${id}`);
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar usuários");
  }
}

async function createDoctor(user: Doctor){
    try{
        const response = await api.post("/Doctor/", user);

    }catch(error){
        throw new Error("Falha ao criar usuário")
    }
}

async function deleteDoctor(id: Number){
    try{
        const response = await api.delete(`/Doctor/${id}`);

    }catch(error){
        throw new Error("Falha ao criar usuário")
    }
}

async function editDoctor(id: Number, doctor: Doctor){
    try{
        const response = await api.put(`/Doctor/${id}`, doctor);

    }catch(error){
        throw new Error("Falha ao criar usuário")
    }
}

export const doctorService = { getDoctor, getDoctors, createDoctor, deleteDoctor, editDoctor };