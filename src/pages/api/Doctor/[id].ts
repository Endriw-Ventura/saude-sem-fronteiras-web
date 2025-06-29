import { NextApiRequest, NextApiResponse } from "next";
import { users } from "@/mocks/db/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
    body,
  } = req;

  const userIndex = users.findIndex((u) => u.id === Number(id));
  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  switch (method) {
    case "GET":
      return res.status(200).json(users[userIndex]);
    case "PUT":
      users[userIndex] = { ...users[userIndex], ...body };
      return res.status(200).json(users[userIndex]);
    case "DELETE":
      users.splice(userIndex, 1);
      return res.status(204).end();
    default:
      return res.status(405).end();
  }
}
