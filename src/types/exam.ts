import { SimpleUser } from "./user";

export interface Exam {
  pacient: SimpleUser;
  time: string;
  date: string;
}

export interface SimpleExam {
  idPacient: number;
  examName: string;
  moment: string;
}

export interface ExamList {
  id: number;
  examName: string;
  pacient: SimpleUser;
  moment: string;
}
