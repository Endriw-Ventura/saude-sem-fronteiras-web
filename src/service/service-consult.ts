import { Doctor } from "@/types/doctor";
import { api } from "./api";
import { Consult, SimpleConsult } from "@/types/consult";

async function getConsults(): Promise<Consult[]> {
  try {
    const { data } = await api.get(`/Event`);
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar consultas");
  }
}

async function getUserConsults(id: Number, role: string): Promise<Consult[]> {
  try {
    const { data } = await api.get(`/Event/${role}/${id}`);
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar consultas");
  }
}

async function getConsult(id: Number): Promise<Consult> {
  try {
    const { data } = await api.get(`/Event/${id}`);
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar consulta");
  }
}

async function createConsult(consult: SimpleConsult): Promise<void> {
  try {
    const response = await api.post("/Event/", consult);
  } catch (error) {
    throw new Error("Falha ao criar consulta");
  }
}

async function deleteConsult(id: Number): Promise<void> {
  try {
    const response = await api.delete(`/Event/${id}`);
  } catch (error) {
    throw new Error("Falha ao deletar consulta");
  }
}

async function editConsult(id: Number, consult: Consult): Promise<void> {
  try {
    const response = await api.put(`/Event/${id}`, consult);
  } catch (error) {
    throw new Error("Falha ao editar consulta");
  }
}

export const consultService = {
  getConsults,
  getConsult,
  getUserConsults,
  createConsult,
  deleteConsult,
  editConsult,
};
