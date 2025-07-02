import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET")
    return res
      .status(200)
      .json(memoryStore.users.filter((user: any) => user.role == "user"));

  if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = memoryStore.users.length + 1;
    memoryStore.users.push(newUser);
    return res.status(201).json(newUser);
  }

  return res.status(405).end();
}
