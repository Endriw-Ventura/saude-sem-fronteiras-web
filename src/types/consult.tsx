import { SimpleDoctor } from "./doctor";
import { SimpleUser } from "./user";

export interface Consult {
  user: SimpleUser;
  doctor: SimpleDoctor;
  time: string;
  date: string;
}

export interface SimpleConsult {
  userId: string;
  doctorId: string;
  moment: string;
}
