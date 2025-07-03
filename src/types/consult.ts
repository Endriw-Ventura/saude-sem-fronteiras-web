import { SimpleDoctor } from "./doctor";
import { SimpleUser } from "./user";

export interface Consult {
  pacient: SimpleUser;
  doctor: SimpleDoctor;
  time: string;
  date: string;
}

export interface SimpleConsult {
  idPacient: string;
  idDoctor: string;
  moment: string;
}

export interface ConsultList {
  id: number;
  pacient: SimpleUser;
  doctor: SimpleDoctor;
  moment: string;
}
