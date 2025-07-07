import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      const userIndex = memoryStore.users
        .filter((user: any) => user.role == "user")
        .findIndex((u: any) => u.id === Number(id));
      if (userIndex === -1)
        return res.status(404).json({ message: "User not found" });
      return res.status(200).json(memoryStore.users[userIndex]);
    case "PUT":
      const indexPut = memoryStore.users.findIndex(
        (u: any) => u.id === Number(id)
      );
      if (indexPut === -1)
        return res.status(404).json({ message: "User not found" });
      let user = memoryStore.users[indexPut];
      user = {
        ...req.body,
      };
      memoryStore.users[indexPut] = user;
      return res.status(200).json(memoryStore.users[indexPut]);
    default:
      return res.status(405).end();
  }
}
