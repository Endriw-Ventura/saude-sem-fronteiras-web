"use client";

import CustomButton from "@/components/ui/custom-button";
import CustomForm from "@/components/ui/custom-form";
import CustomInput from "@/components/ui/custom-input";
import CustomMain from "@/components/ui/custom-main";
import CustomSelect from "@/components/ui/custom-select";
import { useUser } from "@/hooks/use-user";
import { examService } from "@/service/service-exam";
import { examTypes } from "@/mocks/exam-type-list";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SchedulePage() {
  const { loggedUser } = useUser();
  const [selectedExam, setSelectedExam] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    const response = await examService.createExam({
      idPacient: loggedUser!.id.toString(),
      moment: transformDateTime(selectedDate, selectedTime),
    });

    router.push("/exams");
  };

  function transformDateTime(data: string, hora: string) {
    const dateTimeString = `${data}T${hora}:00`;
    return dateTimeString;
  }

  return (
    <CustomMain>
      <CustomForm submitHandler={handleSubmit}>
        <CustomSelect
          name="exam"
          label="Exam Type"
          itemList={examTypes}
          value={selectedExam}
          changeHandler={(e) => setSelectedExam(parseInt(e.target.value))}
        />

        <CustomInput
          placeholder="Enter the date"
          name="date"
          label="Date"
          value={selectedDate}
          required
          type="date"
          changeHandler={(e) => setSelectedDate(e.target.value)}
        />

        <CustomInput
          placeholder="Enter the time"
          name="time"
          label="Time"
          value={selectedTime}
          required
          type="time"
          changeHandler={(e) => setSelectedTime(e.target.value)}
        />
      </CustomForm>
    </CustomMain>
  );
}
