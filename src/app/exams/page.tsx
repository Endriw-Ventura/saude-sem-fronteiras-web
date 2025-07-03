"use client";

import { useUser } from "@/hooks/use-user";
import CustomMain from "@/components/ui/custom-main";
import CustomButton from "@/components/ui/custom-button";
import { examService } from "@/service/service-exam";
import { useEffect, useState } from "react";
import { ExamList } from "@/types/exam";

export default function ExamsPage() {
  const { loggedUser } = useUser();
  const [exams, setExams] = useState<ExamList[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await examService.getUserExams(id, role);
        setExams(response);
      } catch (error) {
        console.error("Erro ao buscar os itens:", error);
      }
    };
    fetchItems();
  });

  const handleRemover = async (id: number) => {
    try {
      await examService.deleteExam(id);
      setExams((prev) => prev.filter((exam) => exam.id !== id));
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };
  if (!loggedUser) {
    return null;
  }
  const { role, id } = loggedUser!;

  return (
    <CustomMain>
      <h1>Your Exams</h1>
      {exams.length > 0 ? (
        exams.map((exam: ExamList) => {
          const { pacient, moment, id, examName } = exam;
          const dateTime = moment.split("T");
          const date = dateTime[0];
          const time = dateTime[1];
          return (
            <div key={id.toString()} className="p-[8px] w-full">
              <table
                className="table-fixed border-collapse w-full"
                border={1}
                cellPadding="8"
                cellSpacing="0"
              >
                <thead className="text-center">
                  <tr>
                    <th className="w-1/6">Patients Name</th>
                    <th className="w-1/6">Exam Name</th>
                    <th className="w-1/6">Date</th>
                    <th className="w-1/6">Time</th>
                    <th className="w-1/6">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr key={id.toString()}>
                    <td className="w-1/6">{`${pacient.name} ${pacient.surname}`}</td>
                    <td className="w-1/6">{`${examName}`}</td>
                    <td className="w-1/6">{date}</td>
                    <td className="w-1/6">{time}</td>
                    <td className="w-1/6">
                      <CustomButton clickHandler={() => handleRemover(id)}>
                        Cancel
                      </CustomButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      ) : (
        <p>No exams Scheduled</p>
      )}
    </CustomMain>
  );
}
