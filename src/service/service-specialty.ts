import { api } from "./api";
import { toast } from "react-toastify";

async function getSpecialties() {
  try {
    const { data } = await api.get("/Specialty/");
    return data;
  } catch {
    toast.error("Couldnt fetch specialties");
    throw new Error("Something went wrong");
  }
}

export const specialtyService = {
  getSpecialties,
};
