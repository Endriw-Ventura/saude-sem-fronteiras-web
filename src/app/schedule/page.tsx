"use client";

import CustomSelect from "@/components/ui/custom-select";
import { useUser } from "@/hooks/useUser";
import { consultService } from "@/service/service-consult";
import { doctorService } from "@/service/service-doctor";
import { specialtyService } from "@/service/service-specialty";
import { SimpleDoctor } from "@/types/doctor";
import { Specialty } from "@/types/specialty";
import { useEffect, useState } from "react";

export default function SchedulePage() {
  const { loggedUser } = useUser();
  const { role } = loggedUser!;
  const [specialities, setSpecialities] = useState<Specialty[]>([]);
  const [doctors, setDoctors] = useState<SimpleDoctor[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [selectedSpeciality, setSelectedSpeciality] =
    useState<Specialty | null>(null);
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
      if (!selectedSpeciality) return;
      try {
        const response = await doctorService.getAvailableDoctors(
          selectedSpeciality.id,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    consultService.createConsult({
      doctorId: selectedDoctor!.id.toString(),
      userId: loggedUser!.id.toString(),
      moment: transformDateTime(selectedDate, selectedTime),
    });
  };

  function transformDateTime(data: string, hora: string) {
    const dateTimeString = `${data}T${hora}:00`;
    return dateTimeString;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center">
        <form
          className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center"
          onSubmit={handleSubmit}
        >
          <CustomSelect
            itemList={specialities}
            value={selectedSpeciality}
            handleOnChange={setSelectedSpeciality}
            getLabel={(p) => p!.name}
          />
          <input
            className="p-2 rounded bg-stone-500 border border-white text-stone-300"
            placeholder="Enter the date"
            value={selectedDate}
            required
            type="date"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <input
            className="p-2 rounded bg-stone-500 border border-white text-stone-300"
            placeholder="Enter the time"
            value={selectedTime}
            required
            type="time"
            onChange={(e) => setSelectedTime(e.target.value)}
          />
          <CustomSelect
            itemList={doctors}
            value={selectedDoctor}
            handleOnChange={setSelectedDoctor}
            getLabel={(d) => `Dr. ${d!.name} ${d!.surname}`}
          />
          <button
            className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
            type="submit"
          >
            Agendar
          </button>
        </form>
      </main>
    </div>
  );
}
