import { api } from "./api";

async function getSpecialties() {
  try {
    const { data } = await api.get("/Specialty/");
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar especialidades");
  }
}

export const specialtyService = {
  getSpecialties,
};
