import { Doctor, SimpleDoctor } from "@/types/doctor";
import { api } from "./api";

async function getDoctors() {
  try {
    const { data } = await api.get(`/Doctor`);
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar usuário");
  }
}

async function getAvailableDoctors(
  idSpecialty: Number,
  moment: string
): Promise<SimpleDoctor[]> {
  try {
    const { data } = await api.get(
      `/Doctor/specialty?idSpecialty=${idSpecialty}&moment=${moment}`
    );
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar médicos");
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
    const response = await api.put(`/Doctor/speciality/${id}`, doctor);
  } catch (error) {
    throw new Error("Falha ao editar médico");
  }
}

export const doctorService = {
  getDoctor,
  getDoctors,
  getAvailableDoctors,
  createDoctor,
  deleteDoctor,
  editDoctor,
};
