import { NextApiRequest, NextApiResponse } from "next";
import { specialties } from "@/mocks/db/specialties";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") return res.status(200).json(specialties);

  return res.status(405).end();
}
