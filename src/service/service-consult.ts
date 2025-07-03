import { api } from "./api";
import { Consult, ConsultList, SimpleConsult } from "@/types/consult";
import { toast } from "react-toastify";

async function getConsults(): Promise<Consult[]> {
  try {
    const { data } = await api.get(`/Event`);
    return data;
  } catch {
    toast.error("Couldnt fetch events!");
    throw new Error("Something went wrong");
  }
}

async function getUserConsults(
  id: number,
  role: string
): Promise<ConsultList[]> {
  try {
    const { data } = await api.get(`/EventsByRole/${role}/${id}`);
    return data;
  } catch {
    toast.error("Couldnt fetch events!");
    throw new Error("Something went wrong");
  }
}

async function getConsult(id: number): Promise<Consult> {
  try {
    const { data } = await api.get(`/Event/${id}`);
    return data;
  } catch {
    toast.error("Couldnt fetch event!");
    throw new Error("Something went wrong");
  }
}

async function createConsult(consult: SimpleConsult): Promise<void> {
  try {
    await api.post("/Event/", consult);
    toast.success("Event created successfully!");
  } catch {
    toast.error("Couldnt create event!");
    throw new Error("Something went wrong");
  }
}

async function deleteConsult(id: number): Promise<void> {
  try {
    await api.delete(`/Event/${id}`);
    toast.success("Event deleted successfully!");
  } catch {
    toast.error("Couldnt delete event!");
    throw new Error("Something went wrong");
  }
}

async function editConsult(id: number, consult: Consult): Promise<void> {
  try {
    await api.put(`/Event/${id}`, consult);
    toast.success("Event updated successfully!");
  } catch {
    toast.error("Couldnt edit event!");
    throw new Error("Something went wrong");
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
