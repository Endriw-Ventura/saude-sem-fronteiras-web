import { NextApiRequest, NextApiResponse } from "next";
import { populatedExams, exams } from "@/mocks/db/exams";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role, id } = req.query;
  if (req.method === "GET") {
    return res
      .status(200)
      .json(populatedExams.filter((exam) => exam.pacient?.id == Number(id)));
  }

  if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = exams.length + 1;
    exams.push(newUser);
    return res.status(201).json(newUser);
  }

  res.status(405).end();
}
