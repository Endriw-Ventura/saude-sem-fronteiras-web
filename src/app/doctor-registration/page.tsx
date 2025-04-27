"use client";

import CustomInput from "@/components/ui/custom-input";
import { Specialty } from "@/types/specialty";
import { specialtyService } from "@/service/service-specialty";
import { useEffect, useState } from "react";
import CustomSelect from "@/components/ui/custom-select";
import { doctorService } from "@/service/service-doctor";
import { Doctor, defaultDoctor } from "@/types/doctor";
import WeekdaysCheckbox from "@/components/doctor-registration/weekdays-checkbox";
import CustomForm from "@/components/ui/custom-form";
import CustomButton from "@/components/ui/custom-button";
import CustomMain from "@/components/ui/custom-main";
import { useRouter } from "next/navigation";

export default function DoctorRegistrationForm() {
  const [createDoctor, setCreateDoctor] = useState<Doctor>(defaultDoctor);
  const [options, setOptions] = useState<Specialty[]>([]);
  const [selected, setSelected] = useState<Specialty | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await doctorService.createDoctor(createDoctor);
    router.push("/");
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
    <CustomMain>
      <CustomForm submitHandler={handleSubmit}>
        <CustomInput
          type="text"
          name="name"
          label="Name"
          value={createDoctor.name}
          placeholder="Enter your name"
          changeHandler={handleInputChange}
        />

        <CustomInput
          type="text"
          name="surname"
          label="Surname"
          value={createDoctor.surname}
          placeholder="Enter your surname"
          changeHandler={handleInputChange}
        />

        <CustomInput
          type="password"
          name="password"
          label="Password"
          value={createDoctor.password}
          placeholder="Enter your password"
          changeHandler={handleInputChange}
        />

        <CustomInput
          type="email"
          name="email"
          label="Email"
          value={createDoctor.email}
          placeholder="Enter your email"
          changeHandler={handleInputChange}
        />

        <CustomSelect
          itemList={options}
          value={selected!}
          label="Specialty"
          handleOnChange={handleSpecialtyChange}
          getLabel={(s) => s.name}
        />

        <CustomInput
          type="text"
          label="CRM"
          name="crm"
          value={createDoctor.crm}
          placeholder="Enter your CRM"
          changeHandler={handleInputChange}
        />

        <CustomInput
          type="time"
          label="Initial Hour"
          name="initialHour"
          changeHandler={handleInputChange}
          value={createDoctor.initialHour}
          placeholder={"Enter your starting hour"}
        />

        <CustomInput
          type="time"
          label="Final Hour"
          name="finalHour"
          changeHandler={handleInputChange}
          value={createDoctor.finalHour}
          placeholder="Enter your ending hour"
        />

        <WeekdaysCheckbox
          handleCheckboxChange={handleCheckboxChange}
          createDoctor={createDoctor}
        />

        <CustomInput
          type="number"
          name="price"
          label="Price"
          value={createDoctor.price.toString()}
          placeholder="Enter your price per event"
          changeHandler={handleInputChange}
        />
        <CustomButton type="submit">Cadastrar</CustomButton>
      </CustomForm>
    </CustomMain>
  );
}
