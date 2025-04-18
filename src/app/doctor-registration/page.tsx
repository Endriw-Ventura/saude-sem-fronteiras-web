"use client";

import CustomInput from "@/components/ui/custom-input";
import { Specialty } from "@/types/specialty";
import { specialtyService } from "@/service/service-specialty";
import { useEffect, useState } from "react";
import CustomSelect from "@/components/ui/custom-select";
import { doctorService } from "@/service/service-doctor";
import { Doctor, defaultDoctor } from "@/types/doctor";
import WeekdaysCheckbox from "@/components/doctor-registration/weekdays-checkbox";

export default function DoctorRegistrationForm() {
  const [createDoctor, setCreateDoctor] = useState<Doctor>(defaultDoctor);
  const [options, setOptions] = useState<Specialty[]>([]);
  const [selected, setSelected] = useState<Specialty | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    doctorService.createDoctor(createDoctor);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setCreateDoctor((prev) => ({
      ...prev,
      WeekdaysDTO: {
        ...prev.WeekdaysDTO,
        [name]: checked,
      },
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setCreateDoctor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpecialtyChange = (specialty: Specialty) => {
    setSelected(specialty);
    setCreateDoctor((prev) => ({
      ...prev,
      specialtyId: specialty.id,
    }));
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await specialtyService.getSpecialties();
        setOptions(response);
        setSelected(response[0]);
        setCreateDoctor((prev) => ({
          ...prev,
          specialtyId: response[0].id,
        }));
      } catch (error) {
        console.error("Erro ao buscar os itens:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#272727] text-white space-y-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-sm space-y-4"
      >
        <CustomInput
          type="text"
          name="name"
          value={createDoctor.name}
          placeholder="Enter your name"
          changeHandler={handleInputChange}
        />

        <CustomInput
          type="text"
          name="surname"
          value={createDoctor.name}
          placeholder="Enter your surname"
          changeHandler={handleInputChange}
        />

        <CustomInput
          type="password"
          name="password"
          value={createDoctor.password}
          placeholder="Enter your password"
          changeHandler={handleInputChange}
        />

        <CustomInput
          type="email"
          name="email"
          value={createDoctor.email}
          placeholder="Enter your email"
          changeHandler={handleInputChange}
        />

        <CustomSelect
          itemList={options}
          value={selected!}
          handleOnChange={handleSpecialtyChange}
          getLabel={(s) => s.name}
        />

        <CustomInput
          type="text"
          name="crm"
          value={createDoctor.crm}
          placeholder="Enter your CRM"
          changeHandler={handleInputChange}
        />

        <label className="flex flex-col">
          Initial Hour:
          <CustomInput
            type="time"
            name="initialHour"
            changeHandler={handleInputChange}
            value={createDoctor.initialHour}
            placeholder={"Enter your starting hour"}
          />
        </label>

        <label className="flex flex-col">
          Final Hour:
          <CustomInput
            type="time"
            name="finalHour"
            changeHandler={handleInputChange}
            value={createDoctor.finalHour}
            placeholder="Enter your ending hour"
          />
        </label>

        <WeekdaysCheckbox
          handleCheckboxChange={handleCheckboxChange}
          createDoctor={createDoctor}
        />

        <CustomInput
          type="number"
          name="price"
          value={createDoctor.price.toString()}
          placeholder="Enter your price per event"
          changeHandler={handleInputChange}
        />
        <button
          type="submit"
          className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}
