import { api } from "./api";
import { Consult, ConsultList, SimpleConsult } from "@/types/consult";
import { toast } from "react-toastify";

async function getConsults(): Promise<Consult[]> {
  try {
    const { data } = await api.get(`/Event`);
    return data;
  } catch (error) {
    toast.error("Couldnt fetch events!");
    throw new Error("Something went wrong");
  }
}

async function getUserConsults(
  id: Number,
  role: string
): Promise<ConsultList[]> {
  try {
    const { data } = await api.get(`/Event/${role}/${id}`);
    return data;
  } catch (error) {
    toast.error("Couldnt fetch events!");
    throw new Error("Something went wrong");
  }
}

async function getConsult(id: Number): Promise<Consult> {
  try {
    const { data } = await api.get(`/Event/${id}`);
    return data;
  } catch (error) {
    toast.error("Couldnt fetch event!");
    throw new Error("Something went wrong");
  }
}

async function createConsult(consult: SimpleConsult): Promise<void> {
  try {
    const response = await api.post("/Event/", consult);
    toast.success("Event created successfully!");
  } catch (error) {
    toast.error("Couldnt create event!");
    throw new Error("Something went wrong");
  }
}

async function deleteConsult(id: Number): Promise<void> {
  try {
    const response = await api.delete(`/Event/${id}`);
    toast.success("Event deleted successfully!");
  } catch (error) {
    toast.error("Couldnt delete event!");
    throw new Error("Something went wrong");
  }
}

async function editConsult(id: Number, consult: Consult): Promise<void> {
  try {
    const response = await api.put(`/Event/${id}`, consult);
    toast.success("Event updated successfully!");
  } catch (error) {
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
