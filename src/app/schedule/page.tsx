"use client";

import CustomButton from "@/components/ui/custom-button";
import CustomForm from "@/components/ui/custom-form";
import CustomInput from "@/components/ui/custom-input";
import CustomMain from "@/components/ui/custom-main";
import CustomSelect from "@/components/ui/custom-select";
import { useUser } from "@/hooks/use-user";
import { consultService } from "@/service/service-consult";
import { doctorService } from "@/service/service-doctor";
import { specialtyService } from "@/service/service-specialty";
import { SimpleDoctor } from "@/types/doctor";
import { Specialty } from "@/types/specialty";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SchedulePage() {
  const { loggedUser } = useUser();
  const [specialities, setSpecialities] = useState<Specialty[]>([]);
  const [doctors, setDoctors] = useState<SimpleDoctor[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();
  const [selectedSpeciality, setSelectedSpeciality] = useState<number>(0);
  const [selectedDoctor, setSelectedDoctor] = useState<SimpleDoctor | null>(
    null
  );

  useEffect(() => {
    const fetchSpecialities = async () => {
      try {
        const response = await specialtyService.getSpecialties();
        setSpecialities(response);
        setSelectedSpeciality(response[0]);
      } catch (error) {
        console.error("Erro ao buscar os especialidades:", error);
      }
    };
    fetchSpecialities();
  }, []);

  useEffect(() => {
    const fetchDoctors = async () => {
      if (!selectedSpeciality || !selectedDate || !selectedTime) return;
      try {
        const response = await doctorService.getAvailableDoctors(
          selectedSpeciality,
          transformDateTime(selectedDate, selectedTime)
        );
        setDoctors(response);
        setSelectedDoctor(response[0]);
      } catch (error) {
        console.error("Erro ao buscar os médicos:", error);
      }
    };
    fetchDoctors();
  }, [selectedSpeciality, selectedDate, selectedTime]);

  const handleSubmit = async () => {
    await consultService.createConsult({
      idDoctor: selectedDoctor!.id.toString(),
      idPacient: loggedUser!.id.toString(),
      moment: transformDateTime(selectedDate, selectedTime),
    });

    router.push("/events");
  };

  function transformDateTime(data: string, hora: string) {
    const dateTimeString = `${data}T${hora}:00`;
    return dateTimeString;
  }

  if (!loggedUser) {
    return null;
  }

  return (
    <CustomMain>
      <CustomForm submitHandler={handleSubmit}>
        <CustomSelect
          name="specialty"
          label="Specialty"
          itemList={specialities}
          value={selectedSpeciality}
          changeHandler={(e) => setSelectedSpeciality(Number(e.target.value))}
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

        {selectedSpeciality &&
        selectedDate &&
        selectedTime &&
        doctors.length > 0 ? (
          <>
            <CustomSelect
              name="doctor"
              label="Doctors"
              itemList={doctors}
              value={doctors.findIndex((doc) => doc.id === selectedDoctor?.id)}
              changeHandler={(e) =>
                setSelectedDoctor(doctors[Number(e.target.value)])
              }
            />
            {selectedDoctor && (
              <>
                <p>{`Price: R$ ${selectedDoctor.price}`}</p>
                <CustomButton type="submit">Schedule</CustomButton>
              </>
            )}
          </>
        ) : (
          <p>There are no doctors for this time and/or date</p>
        )}
      </CustomForm>
    </CustomMain>
  );
}
