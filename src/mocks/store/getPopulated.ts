import { memoryStore } from "./memoryStore";

export function getPopulatedEvents() {
  return memoryStore.events.map((event: any) => {
    const patient = memoryStore.users.find(
      (u: any) => u.id === event.patientId
    );
    const doctor = memoryStore.users.find((u: any) => u.id === event.doctorId);
    return { ...event, patient, doctor };
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

    const patientIds = eventsFiltered.map((event: any) => event.patientId);
    const exams = memoryStore.exams
      .filter((exam: any) => patientIds.includes(exam.patientId))
      .map((exam: any) => {
        const patient = memoryStore.users.find(
          (u: any) => u.id === exam.patientId
        );
        return { ...exam, patient };
      });

    return exams;
  }
  return memoryStore.exams
    .filter((exam: any) => exam.patientId == id)
    .map((exam: any) => {
      const patient = memoryStore.users.find(
        (u: any) => u.id === exam.patientId
      );
      return { ...exam, patient };
    });
}
