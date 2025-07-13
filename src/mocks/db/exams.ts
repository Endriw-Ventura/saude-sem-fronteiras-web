import { users } from "./users";

export const exams = [
  {
    id: 1,
    patientId: 1,
    examName: "Blood Test",
    moment: "2025-07-20T09:00:00",
  },
  { id: 2, patientId: 2, examName: "X-Ray", moment: "2025-07-20T09:00:00" },
];

export const populatedExams = exams.map((exam) => {
  const patient = users.find((u) => u.id === exam.patientId);

  return {
    ...exam,
    patient: patient,
  };
});
