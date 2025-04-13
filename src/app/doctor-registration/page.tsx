"use client";

import CustomInput from "@/components/ui/CustomInput";
import Specialty from "@/types/specialty";
import { specialtyService } from "@/service/service-specialty";
import { useEffect, useState } from "react";
import CustomSelect from "@/components/ui/CustomSelect";

interface formData {
  name: "";
  surname: "";
  crm: "";
  password: "";
  initialHour: "";
  finalHour: "";
  specialtyId: 0;
  price: "";
  weekDays: {
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
  };
}

const defaultDoctor: formData = {
  name: "",
  surname: "",
  crm: "",
  password: "",
  initialHour: "",
  finalHour: "",
  specialtyId: 0,
  price: "",
  weekDays: {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  },
};

export default function DoctorRegistrationForm() {
  const [createDoctor, setCreateDoctor] = useState<formData>(defaultDoctor);
  const [options, setOptions] = useState<Specialty[]>([]);
  const [selected, setSelected] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ createDoctor });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setCreateDoctor((prev) => {
      const updatedDoctor = { ...prev };
      updatedDoctor.weekDays = {
        ...updatedDoctor.weekDays,
        [name]: checked,
      };

      return updatedDoctor;
    });
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelected(value);
    setCreateDoctor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await specialtyService.getSpecialties();
        setOptions(response);
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
          value={createDoctor.surname}
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

        <CustomSelect
          itemList={options}
          value={selected}
          handleOnChange={handleSelectChange}
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
            placeholder="Enter you ending hour"
          />
        </label>

        <div className="grid grid-cols-7 gap-2 text-center font-semibold text-sm">
          <div>D</div>
          <div>S</div>
          <div>T</div>
          <div>Q</div>
          <div>Q</div>
          <div>S</div>
          <div>S</div>
          <input
            checked={createDoctor.weekDays.sunday}
            name="sunday"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <input
            checked={createDoctor.weekDays.monday}
            name="monday"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <input
            checked={createDoctor.weekDays.tuesday}
            name="tuesday"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <input
            checked={createDoctor.weekDays.wednesday}
            name="wednesday"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <input
            checked={createDoctor.weekDays.thursday}
            name="thursday"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <input
            checked={createDoctor.weekDays.friday}
            name="friday"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <input
            checked={createDoctor.weekDays.saturday}
            name="saturday"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
        </div>

        <CustomInput
          type="number"
          name="price"
          value={createDoctor.price}
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
