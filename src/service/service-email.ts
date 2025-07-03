import { api } from "./api";
import { toast } from "react-toastify";

async function sendEmail(address: string) {
  try {
    const { data } = await api.post(`/Email`, address);
    toast.success(`Email sent to: ${address}`);
    return data;
  } catch {
    toast.error("Couldnt send the email!");
    throw new Error("Something went wrong");
  }
}

async function resetPassword(token: string | null, newPassword: string) {
  try {
    const data = await api.post(
      "Reset",
      JSON.stringify({ token, newPassword })
    );
    toast.success("Password reset successfully!");
    return data;
  } catch (error) {
    toast.error(`Error: ${error}`);
  }
}

export const emailService = {
  sendEmail,
  resetPassword,
};
