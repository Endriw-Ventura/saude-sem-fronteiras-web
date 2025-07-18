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
import { SelectType } from "@/types/select-type";

export default function SchedulePage() {
  const { loggedUser } = useUser();
  const router = useRouter();
  const [selectedExam, setSelectedExam] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedUser, setSelectedUser] = useState(0);
  const [patients, setPatients] = useState<SelectType[]>([]);

  const handleSubmit = async () => {
    await examService.createExam({
      idPatient: selectedUser,
      examName: examTypes.find((exam) => exam.id === selectedExam)!.name,
      moment: transformDateTime(selectedDate, selectedTime),
    });
    router.push("/exams");
  };

  function transformDateTime(data: string, hora: string) {
    const dateTimeString = `${data}T${hora}:00`;
    return dateTimeString;
  }

  useEffect(() => {
    const fetchPatients = async () => {
      if (!loggedUser) return;

      try {
        const users = await examService.getUsers(
          loggedUser.id,
          loggedUser.role
        );
        const userList: SelectType[] = users.map((exam) => ({
          id: exam.patient.id,
          name: exam.patient.name,
        }));
        setPatients(userList);
        if (userList.length > 0) setSelectedUser(userList[0].id);
      } catch (error) {
        console.error("Failed to load users for exam", error);
      }
    };

    fetchPatients();
  }, [loggedUser]);

  if (!loggedUser) {
    return null;
  }

  return (
    <CustomMain>
      {patients.length > 0 ? (
        <CustomForm submitHandler={handleSubmit}>
          <CustomSelect
            name="user"
            label="Patient"
            itemList={patients}
            value={selectedUser}
            changeHandler={(e) => setSelectedUser(parseInt(e.target.value))}
          />

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

          <CustomButton type="submit">Schedule</CustomButton>
        </CustomForm>
      ) : (
        <p>You must have patients to schedule an exam.</p>
      )}
    </CustomMain>
  );
}
