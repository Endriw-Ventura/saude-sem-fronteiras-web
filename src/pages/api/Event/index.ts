import { NextApiRequest, NextApiResponse } from "next";
import { users } from "@/mocks/db/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = Math.floor(Math.random() * 1000);
    users.push(newUser);
    return res.status(201).json(newUser);
  }

  res.status(405).end();
}
