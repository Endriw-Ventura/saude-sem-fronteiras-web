import { SimpleDoctor } from "./doctor";
import { SimpleUser } from "./user";

export interface Exam {
  pacient: SimpleUser;
  time: string;
  date: string;
}

export interface SimpleExam {
  idPacient: Number;
  examName: string;
  moment: string;
}

export interface ExamList {
  id: Number;
  examName: string;
  pacient: SimpleUser;
  moment: string;
}
