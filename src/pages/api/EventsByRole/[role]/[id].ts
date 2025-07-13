import { NextApiRequest, NextApiResponse } from "next";
import { getPopulatedEvents } from "@/mocks/store/getPopulated";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role, id } = req.query;
  if (req.method === "GET") {
    const events = getPopulatedEvents();
    const filtered = events.filter((event: any) =>
      role === "doctor"
        ? event.doctor?.id === Number(id)
        : event.patient?.id === Number(id)
    );
    return res.status(200).json(filtered);
  }

  res.status(405).end();
}
