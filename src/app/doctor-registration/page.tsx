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
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [selectedSpecialtyIndex, setSelectedSpecialtyIndex] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await doctorService.createDoctor(createDoctor);
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCreateDoctor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value);
    const specialty = specialties[index];
    setSelectedSpecialtyIndex(index);
    setCreateDoctor((prev) => ({
      ...prev,
      specialtyId: specialty.id,
    }));
  };

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await specialtyService.getSpecialties();
        setSpecialties(response);
        setCreateDoctor((prev) => ({
          ...prev,
          specialtyId: response[0]?.id || 0,
        }));
      } catch (error) {
        console.error("Erro ao buscar especialidades:", error);
      }
    };
    fetchSpecialties();
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
          name="specialty"
          label="Specialty"
          itemList={specialties}
          value={selectedSpecialtyIndex}
          changeHandler={handleSpecialtyChange}
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
          placeholder="Enter your starting hour"
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

        <CustomButton type="submit">Register</CustomButton>
      </CustomForm>
    </CustomMain>
  );
}
