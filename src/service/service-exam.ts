import { api } from "./api";
import { Exam, ExamList, SimpleExam } from "@/types/exam";
import { SimpleUser } from "@/types/user";
import { toast } from "react-toastify";

async function getExams(): Promise<Exam[]> {
  try {
    const { data } = await api.get(`/Exam`);
    return data;
  } catch (error) {
    toast.error("Couldnt fetch exams!");
    throw new Error("Something went wrong");
  }
}

async function getUserExams(id: Number, role: string): Promise<ExamList[]> {
  try {
    const { data } = await api.get(`/ExamsByRole/${role}/${id}`);
    return data;
  } catch (error) {
    toast.error("Couldnt fetch exams!");
    throw new Error("Something went wrong");
  }
}

async function getUsers(id: Number, role: string): Promise<SimpleUser[]> {
  try {
    const { data } = await api.get(`/Exam/user/${role}/${id}`);
    return data;
  } catch (error) {
    toast.error("Couldnt fetch exams!");
    throw new Error("Something went wrong");
  }
}

async function getExam(id: Number): Promise<Exam> {
  try {
    const { data } = await api.get(`/Exam/${id}`);
    return data;
  } catch (error) {
    toast.error("Couldnt fetch exam!");
    throw new Error("Something went wrong");
  }
}

async function createExam(exam: SimpleExam): Promise<void> {
  try {
    const response = await api.post("/Exam/", exam);
    toast.success("Exam created successfully!");
  } catch (error) {
    toast.error("Couldnt create exam!");
    throw new Error("Something went wrong");
  }
}

async function deleteExam(id: Number): Promise<void> {
  try {
    const response = await api.delete(`/Exam/${id}`);
    toast.success("Exam deleted successfully!");
  } catch (error) {
    toast.error("Couldnt delete exam!");
    throw new Error("Something went wrong");
  }
}

async function editExam(id: Number, exam: Exam): Promise<void> {
  try {
    const response = await api.put(`/Exam/${id}`, exam);
    toast.success("Exam updated successfully!");
  } catch (error) {
    toast.error("Couldnt edit exam!");
    throw new Error("Something went wrong");
  }
}

export const examService = {
  getExam,
  getExams,
  getUsers,
  getUserExams,
  createExam,
  deleteExam,
  editExam,
};
