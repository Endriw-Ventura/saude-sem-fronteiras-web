import { NextApiRequest, NextApiResponse } from "next";
import { users } from "@/mocks/db/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  const userIndex = users
    .filter((user) => user.role == "user")
    .findIndex((u) => u.id === Number(id));
  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  switch (method) {
    case "GET":
      return res.status(200).json(users[userIndex]);
    default:
      return res.status(405).end();
  }
}
