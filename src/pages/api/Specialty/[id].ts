import { NextApiRequest, NextApiResponse } from "next";
import { specialties } from "@/mocks/db/specialties";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  const userIndex = specialties.findIndex((u) => u.id === Number(id));
  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  switch (method) {
    case "GET":
      return res.status(200).json(specialties[userIndex]);
    default:
      return res.status(405).end();
  }
}
