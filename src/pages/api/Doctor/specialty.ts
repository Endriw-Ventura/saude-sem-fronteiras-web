import { NextApiRequest, NextApiResponse } from "next";
import { users } from "@/mocks/db/users";
import { memoryStore } from "@/mocks/store/memoryStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { idSpecialty, moment } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!idSpecialty || !moment) {
    return res
      .status(400)
      .json({ message: "Parâmetros obrigatórios ausentes." });
  }

  const availableDoctors = users.filter((user) => {
    const isDoctor = user.role === "doctor";
    const isCorrectSpecialty = user.specialtyId?.toString() === idSpecialty;

    const hasConflict = memoryStore.events.some((event: any) => {
      return event.doctorId === user.id && event.moment === moment;
    });

    return isDoctor && isCorrectSpecialty && !hasConflict;
  });

  return res.status(200).json(availableDoctors);
}
