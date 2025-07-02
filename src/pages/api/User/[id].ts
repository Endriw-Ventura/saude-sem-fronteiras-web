import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  const userIndex = memoryStore.users
    .filter((user: any) => user.role == "user")
    .findIndex((u: any) => u.id === Number(id));
  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  switch (method) {
    case "GET":
      return res.status(200).json(memoryStore.users[userIndex]);
    default:
      return res.status(405).end();
  }
}
