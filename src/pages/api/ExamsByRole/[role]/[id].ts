import { NextApiRequest, NextApiResponse } from "next";
import { getPopulatedExams } from "@/mocks/store/getPopulated";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, role } = req.query;
  if (req.method === "GET") {
    const exams = getPopulatedExams(Number(id), role);
    return res.status(200).json(exams);
  }

  res.status(405).end();
}
