import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const eventIndex = memoryStore.events.findIndex(
      (event: any) => event.id === Number(id)
    );

    if (eventIndex === -1) {
      return res.status(404).json({ message: "Evento não encontrado." });
    }

    const removedEvent = memoryStore.events.splice(eventIndex, 1)[0];
    return res.status(200).json(removedEvent);
  }

  res.status(405).end();
}
