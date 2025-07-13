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
      if (!loggedUser) return;

      try {
        const response = await examService.getUserExams(
          loggedUser.id,
          loggedUser.role
        );
        setExams(response);
      } catch (error) {
        console.error("Erro ao buscar os itens:", error);
      }
    };

    fetchItems();
  }, [loggedUser]);

  const handleRemover = async (id: number) => {
    try {
      await examService.deleteExam(id);
      setExams((prev) => prev.filter((exam) => exam.id !== id));
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  // ✅ Fallback antes de renderizar
  if (!loggedUser) {
    return <p>Loading...</p>;
  }

  return (
    <CustomMain>
      <h1>Your Exams</h1>
      {exams.length > 0 ? (
        exams.map((exam: ExamList) => {
          const { patient, moment, id, examName } = exam;
          const [date, time] = moment.split("T");
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
                    <th className="w-1/6">Patient Name</th>
                    <th className="w-1/6">Exam Name</th>
                    <th className="w-1/6">Date</th>
                    <th className="w-1/6">Time</th>
                    <th className="w-1/6">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>{`${patient.name} ${patient.surname}`}</td>
                    <td>{examName}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>
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
        <p>No exams scheduled</p>
      )}
    </CustomMain>
  );
}
