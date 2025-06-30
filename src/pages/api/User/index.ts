import { NextApiRequest, NextApiResponse } from "next";
import { users } from "@/mocks/db/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET")
    return res.status(200).json(users.filter((user) => user.role == "user"));

  if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    return res.status(201).json(newUser);
  }

  return res.status(405).end();
}
