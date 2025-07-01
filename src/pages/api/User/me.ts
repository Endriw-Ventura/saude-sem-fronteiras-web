import { NextApiRequest, NextApiResponse } from "next";
import { users } from "@/mocks/db/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Malformed token" });
  const userId = token.split("_")[1];
  if (userId) {
    const user = users.find((u) => u.id === 1);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(user);
  }

  return res.status(401).json({ message: "Invalid token" });
}
