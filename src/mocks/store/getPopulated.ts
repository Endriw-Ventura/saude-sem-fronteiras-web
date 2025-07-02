import { memoryStore } from "./memoryStore";

export function getPopulatedEvents() {
  return memoryStore.events.map((event: any) => {
    const pacient = memoryStore.users.find(
      (u: any) => u.id === event.pacientId
    );
    const doctor = memoryStore.users.find((u: any) => u.id === event.doctorId);
    return { ...event, pacient, doctor };
  });
}

export function getPopulatedExams() {
  return memoryStore.exams.map((exam: any) => {
    const pacient = memoryStore.users.find((u: any) => u.id === exam.userId);
    return { ...exam, pacient };
  });
}
