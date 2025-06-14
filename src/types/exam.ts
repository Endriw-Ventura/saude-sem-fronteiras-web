import { SimpleDoctor } from "./doctor";
import { SimpleUser } from "./user";

export interface Exam {
  pacient: SimpleUser;
  time: string;
  date: string;
}

export interface SimpleExam {
  idPacient: string;
  moment: string;
}

export interface ExamList {
  id: Number;
  pacient: SimpleUser;
  moment: string;
}
