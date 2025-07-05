import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";
import { getPopulatedExams } from "@/mocks/store/getPopulated";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (req.method === "GET") {
    const exams = getPopulatedExams(Number(id));
    return res.status(200).json(exams);
  }

  if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = memoryStore.exams.length + 1;
    memoryStore.exams.push(newUser);
    return res.status(201).json(newUser);
  }

  res.status(405).end();
}
