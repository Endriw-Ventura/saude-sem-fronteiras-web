import { NextApiRequest, NextApiResponse } from "next";
import { populatedEvents, events } from "@/mocks/db/events";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role, id } = req.query;
  if (req.method === "GET") {
    return res
      .status(200)
      .json(
        populatedEvents.filter((event) =>
          role == "doctor"
            ? event.doctor?.id == Number(id)
            : event.pacient?.id == Number(id)
        )
      );
  }

  if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = events.length + 1;
    events.push(newUser);
    return res.status(201).json(newUser);
  }

  res.status(405).end();
}
