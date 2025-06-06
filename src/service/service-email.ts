import { api } from "./api";
import { toast } from "react-toastify";

async function sendEmail(address: string) {
  try {
    const { data } = await api.post(`/Email`, address);
    toast.success(`Email sent to: ${address}`);
    return data;
  } catch (error) {
    toast.error("Couldnt send the email!");
    throw new Error("Something went wrong");
  }
}

export const emailService = {
  sendEmail,
};
