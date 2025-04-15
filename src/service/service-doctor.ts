import { Doctor } from "@/types/doctor";
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
    throw new Error("Falha ao buscar médicos");
  }
}

async function createDoctor(doctor: Doctor) {
  try {
    const response = await api.post("/Doctor/", doctor);
  } catch (error) {
    throw new Error("Falha ao criar médico");
  }
}

async function deleteDoctor(id: Number) {
  try {
    const response = await api.delete(`/Doctor/${id}`);
  } catch (error) {
    throw new Error("Falha ao deletar médico");
  }
}

async function editDoctor(id: Number, doctor: Doctor) {
  try {
    const response = await api.put(`/Doctor/${id}`, doctor);
  } catch (error) {
    throw new Error("Falha ao editar médico");
  }
}

export const doctorService = {
  getDoctor,
  getDoctors,
  createDoctor,
  deleteDoctor,
  editDoctor,
};
