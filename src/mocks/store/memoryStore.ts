import { users } from "../db/users";
import { specialties } from "../db/specialties";
import { events } from "../db/events";
import { exams } from "../db/exams";

if (!(global as any).memoryStore) {
  (global as any).memoryStore = {
    users: [...users],
    specialties: [...specialties],
    events: [...events],
    exams: [...exams],
  };
}

export const memoryStore = (global as any).memoryStore;
