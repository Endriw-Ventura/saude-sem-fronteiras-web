import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    if (req.method === "POST") {
      const { idPacient, moment, examName } = req.body;
      const pacientId = Number(idPacient);
      const pacient = memoryStore.users.find((u: any) => u.id === pacientId);

      if (!pacient)
        return res.status(400).json({ message: "Pacient not found" });

      const newEvent = {
        id: memoryStore.exams.length + 1,
        examName,
        pacientId,
        moment,
        pacient,
      };

      memoryStore.exams.push(newEvent);
      return res.status(201).json(newEvent);
    }
  }

  res.status(405).end();
}
