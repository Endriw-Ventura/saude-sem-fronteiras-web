import { api } from "./api";
import { Exam, ExamList, SimpleExam } from "@/types/exam";
import { SimpleUser } from "@/types/user";
import { toast } from "react-toastify";

async function getExams(): Promise<Exam[]> {
  try {
    const { data } = await api.get(`/Exam`);
    return data;
  } catch {
    toast.error("Couldnt fetch exams!");
    throw new Error("Something went wrong");
  }
}

async function getUserExams(id: number, role: string): Promise<ExamList[]> {
  try {
    const { data } = await api.get(`/Exam/${role}/${id}`);
    return data;
  } catch {
    toast.error("Couldnt fetch exams!");
    throw new Error("Something went wrong");
  }
}

async function getUsers(id: number, role: string): Promise<SimpleUser[]> {
  try {
    const { data } = await api.get(`/Exam/user/${role}/${id}`);
    return data;
  } catch {
    toast.error("Couldnt fetch exams!");
    throw new Error("Something went wrong");
  }
}

async function getExam(id: number): Promise<Exam> {
  try {
    const { data } = await api.get(`/Exam/${id}`);
    return data;
  } catch {
    toast.error("Couldnt fetch exam!");
    throw new Error("Something went wrong");
  }
}

async function createExam(exam: SimpleExam): Promise<void> {
  try {
    await api.post("/Exam/", exam);
    toast.success("Exam created successfully!");
  } catch {
    toast.error("Couldnt create exam!");
    throw new Error("Something went wrong");
  }
}

async function deleteExam(id: number): Promise<void> {
  try {
    await api.delete(`/Exam/${id}`);
    toast.success("Exam deleted successfully!");
  } catch {
    toast.error("Couldnt delete exam!");
    throw new Error("Something went wrong");
  }
}

async function editExam(id: number, exam: Exam): Promise<void> {
  try {
    await api.put(`/Exam/${id}`, exam);
    toast.success("Exam updated successfully!");
  } catch {
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
