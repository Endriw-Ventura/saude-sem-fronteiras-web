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

export function getPopulatedExams(
  id: number,
  role: string | string[] | undefined
) {
  if (role == "doctor") {
    const eventsFiltered = memoryStore.events.filter((event: any) => {
      return event.doctorId == id;
    });

    const pacientIds = eventsFiltered.map((event: any) => event.pacientId);
    const exams = memoryStore.exams
      .filter((exam: any) => pacientIds.includes(exam.pacientId))
      .map((exam: any) => {
        const pacient = memoryStore.users.find(
          (u: any) => u.id === exam.pacientId
        );
        return { ...exam, pacient };
      });

    return exams;
  }
  return memoryStore.exams
    .filter((exam: any) => exam.pacientId == id)
    .map((exam: any) => {
      const pacient = memoryStore.users.find(
        (u: any) => u.id === exam.pacientId
      );
      return { ...exam, pacient };
    });
}
