"use client";
import { User } from "@/types/user";
import CustomButton from "../ui/custom-button";
import CustomInput from "../ui/custom-input";

interface FormOneProps {
  user: User;
  onNext: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserFormStepOne({
  user,
  onNext,
  onChange,
}: FormOneProps) {
  return (
    <>
      <h2 className="text-center">Step 1: Basic Info</h2>
      <CustomInput
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your name"
        changeHandler={onChange}
        label="Name"
      />
      <CustomInput
        type="text"
        name="surname"
        value={user.surname}
        placeholder="Enter your surname"
        changeHandler={onChange}
        label="Surname"
      />
      <CustomInput
        type="text"
        name="cpf"
        value={user.cpf}
        placeholder="Enter your CPF"
        changeHandler={onChange}
        label="CPF"
      />
      <CustomInput
        type="email"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        changeHandler={onChange}
        label="Email"
      />
      <CustomInput
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        changeHandler={onChange}
        label="Password"
      />
      <CustomButton clickHandler={onNext}>Next</CustomButton>
    </>
  );
}
