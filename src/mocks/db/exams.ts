import { users } from "./users";

export const exams = [
  {
    id: 1,
    pacientId: 1,
    examName: "Blood Test",
    moment: "2025-07-20T09:00:00",
  },
  { id: 2, pacientId: 2, examName: "X-Ray", moment: "2025-07-20T09:00:00" },
];

export const populatedExams = exams.map((exam) => {
  const pacient = users.find((u) => u.id === exam.pacientId);

  return {
    ...exam,
    pacient,
  };
});
