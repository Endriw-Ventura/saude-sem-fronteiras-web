import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { idDoctor, idPacient, moment } = req.body;
    const doctorId = Number(idDoctor);
    const pacientId = Number(idPacient);
    const doctor = memoryStore.users.find((u: any) => u.id === doctorId);
    const pacient = memoryStore.users.find((u: any) => u.id === pacientId);

    if (!doctor || !pacient)
      return res.status(400).json({ message: "Doctor or pacient not found" });

    const newEvent = {
      id: memoryStore.events.length + 1,
      doctorId,
      pacientId,
      moment,
      doctor,
      pacient,
    };

    memoryStore.events.push(newEvent);
    return res.status(201).json(newEvent);
  }

  return res.status(405).end();
}
