import { NextApiRequest, NextApiResponse } from "next";
import { events } from "@/mocks/db/events";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = events.length + 1;
    events.push(newUser);
    return res.status(201).json(newUser);
  }

  res.status(405).end();
}
