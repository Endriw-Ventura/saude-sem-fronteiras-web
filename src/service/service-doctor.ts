import { Doctor, SimpleDoctor } from "@/types/doctor";
import { api } from "./api";
import { toast } from "react-toastify";

async function getDoctors() {
  try {
    const { data } = await api.get(`/Doctor`);
    return data;
  } catch {
    toast.error("Couldnt fetch doctors!");
    throw new Error("Something went wrong");
  }
}

async function getAvailableDoctors(
  idSpecialty: number,
  moment: string
): Promise<SimpleDoctor[]> {
  try {
    const { data } = await api.get(
      `/Doctor/specialty?idSpecialty=${idSpecialty}&moment=${moment}`
    );
    return data;
  } catch {
    toast.error("Couldnt fetch available doctors!");
    throw new Error("Something went wrong");
  }
}

async function getDoctor(id: number) {
  try {
    const { data } = await api.get(`/Doctor/${id}`);
    return data;
  } catch {
    toast.error("Couldnt fetch doctor!");
    throw new Error("Something went wrong");
  }
}

async function createDoctor(doctor: Doctor) {
  try {
    await api.post("/Doctor/", doctor);
    toast.success("Doctor created succesfully!");
  } catch {
    toast.error("Couldnt create doctor!");
    throw new Error("Something went wrong");
  }
}

async function deleteDoctor(id: number) {
  try {
    await api.delete(`/Doctor/${id}`);
    toast.success("Doctor deleted succesfully!");
  } catch {
    toast.error("Couldnt delete doctor!");
    throw new Error("Something went wrong");
  }
}

async function editDoctor(id: number, doctor: Doctor) {
  try {
    await api.put(`/Doctor/speciality/${id}`, doctor);
    toast.success("Doctor updated succesfully!");
  } catch {
    toast.error("Couldnt update doctor!");
    throw new Error("Something went wrong");
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
