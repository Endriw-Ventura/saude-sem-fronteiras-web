import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { idPatient, moment, examName } = req.body;
    const patientId = Number(idPatient);
    const patient = memoryStore.users.find((u: any) => u.id === patientId);

    if (!patient) return res.status(400).json({ message: "Patient not found" });

    const newEvent = {
      id: memoryStore.exams.length + 1,
      examName,
      patientId,
      moment,
      patient,
    };

    memoryStore.exams.push(newEvent);
    return res.status(201).json(newEvent);
  }
  return res.status(405).end();
}
