import { NextApiRequest, NextApiResponse } from "next";
import { memoryStore } from "@/mocks/store/memoryStore";
import { getPopulatedExams } from "@/mocks/store/getPopulated";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role, id } = req.query;
  if (req.method === "GET") {
    const events = getPopulatedExams();
    const filtered = events.filter(
      (event: any) => event.pacient?.id === Number(id)
    );
    return res.status(200).json(filtered);
  }

  if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = memoryStore.exams.length + 1;
    memoryStore.exams.push(newUser);
    return res.status(201).json(newUser);
  }

  res.status(405).end();
}
