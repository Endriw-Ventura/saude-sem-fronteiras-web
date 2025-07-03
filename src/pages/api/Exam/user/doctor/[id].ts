import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    const doctorId = Number(id);
    const events = memoryStore.events.filter(
      (e: any) => e.doctorId === doctorId
    );
    const pacientIds = events.map((e: any) => e.pacientId);
    const exams = memoryStore.exams.filter((exam: any) =>
      pacientIds.includes(exam.userId)
    );

    return res.status(200).json(
      exams.map((exam: any) => {
        const pacient = memoryStore.users.find(
          (u: any) => u.id === exam.userId
        );
        return { ...exam, pacient };
      })
    );
  }

  res.status(405).end();
}
