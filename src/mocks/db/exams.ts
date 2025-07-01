import { users } from "./users";

export const exams = [
  { id: 1, userId: 1, examName: "Blood Test", moment: "2025-07-20T09:00:00" },
  { id: 2, userId: 2, examName: "X-Ray", moment: "2025-07-20T09:00:00" },
];

export const populatedExams = exams.map((exam) => {
  const pacient = users.find((u) => u.id === exam.userId);

  return {
    ...exam,
    pacient,
  };
});
