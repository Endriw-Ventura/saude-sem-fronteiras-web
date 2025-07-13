import { SimpleDoctor } from "./doctor";
import { SimpleUser } from "./user";

export interface Consult {
  id: number;
  patient: SimpleUser;
  doctor: SimpleDoctor;
  time: string;
  date: string;
}

export interface SimpleConsult {
  idPatient: string;
  idDoctor: string;
  moment: string;
}

export interface ConsultList {
  id: number;
  patient: SimpleUser;
  doctor: SimpleDoctor;
  moment: string;
}
