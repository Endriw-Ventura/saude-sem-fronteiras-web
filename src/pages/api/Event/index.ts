import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { idDoctor, idPatient, moment } = req.body;
    const doctorId = Number(idDoctor);
    const patientId = Number(idPatient);
    const doctor = memoryStore.users.find((u: any) => u.id === doctorId);
    const patient = memoryStore.users.find((u: any) => u.id === patientId);

    if (!doctor || !patient)
      return res.status(400).json({ message: "Doctor or patient not found" });

    const newEvent = {
      id: memoryStore.events.length + 1,
      doctorId,
      patientId,
      moment,
      doctor,
      patient,
    };

    memoryStore.events.push(newEvent);
    return res.status(201).json(newEvent);
  }

  return res.status(405).end();
}
