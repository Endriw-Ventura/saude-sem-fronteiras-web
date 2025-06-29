import { NextApiRequest, NextApiResponse } from "next";
import { doctors } from "@/mocks/db/doctors";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(doctors);
  }

  if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = Math.floor(Math.random() * 1000);
    doctors.push(newUser);
    return res.status(201).json(newUser);
  }

  res.status(405).end();
}
