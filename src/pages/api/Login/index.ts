import { NextApiRequest, NextApiResponse } from "next";
import { loginUsers } from "@/mocks/db/login";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const user = loginUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  return res.status(200).json({
    token: user.token,
    user: { id: 1, name: user.email, email: user.email },
  });
}
