import { SimpleUser } from "./user";

export interface Exam {
  patient: SimpleUser;
  time: string;
  date: string;
}

export interface SimpleExam {
  idPatient: number;
  examName: string;
  moment: string;
}

export interface ExamList {
  id: number;
  examName: string;
  patient: SimpleUser;
  moment: string;
}
