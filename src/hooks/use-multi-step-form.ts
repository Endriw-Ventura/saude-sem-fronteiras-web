"use client";

import { useState } from "react";
import { User, defaultUser } from "@/types/user";
import { userService } from "@/service/service-user";
import { useRouter } from "next/navigation";
import UserInfo from "@/types/userInfo";
import Address from "@/types/address";

export function useMultiStepForm() {
  const [step, setStep] = useState<number>(1);
  const [createUser, setCreateUser] = useState<User>(defaultUser);
  const router = useRouter();

  const handleNextStep = () => setStep((s) => s + 1);
  const handlePrevStep = () => setStep((s) => s - 1);

  const updateUser = (name: string, value: string | boolean) => {
    setCreateUser((prev) => {
      const updated = { ...prev };

      switch (name) {
        case "name":
        case "surname":
        case "cpf":
        case "email":
        case "password":
          updateUserBasicInformation(updated, name, value);
          break;
        case "motherName":
        case "bloodType":
        case "cirurgies":
        case "allergies":
        case "medications":
        case "medicalCondition":
          updateUserInfo(updated, name, value);
          break;
        case "country":
        case "state":
        case "city":
        case "streetName":
        case "number":
        case "zipCode":
        case "complement":
        case "neighborhood":
          updateAddress(updated, name, value);
          break;
      }

      return updated;
    });
  };

  const updateUserBasicInformation = (
    updated: User,
    name: keyof User,
    value: any
  ) => {
    updated[name] = value;
  };

  const updateAddress = (updated: User, name: keyof Address, value: any) => {
    updated.address[name] = value;
  };

  const updateUserInfo = (updated: User, name: keyof UserInfo, value: any) => {
    switch (name) {
      case "allergies":
      case "cirurgies":
      case "medications":
        updated.userInfo[name] = value;
        break;
      default:
        updated.userInfo[name] = value;
        break;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateUser(name, value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateUser(name, checked);
  };

  const handleConfirmation = async () => {
    await userService.createUser(createUser);
    router.push("/");
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, selectedIndex, options } = e.target;
    const selectedText = options[selectedIndex].text;

    switch (name) {
      case "medicalCondition":
        return handleMedicalConditionSelectChange(selectedText);
      case "bloodType":
        return handleBloodTypeSelectChange(selectedText);
    }
  };

  const handleBloodTypeSelectChange = (value: string) => {
    setCreateUser((prev) => {
      const updated = { ...prev };
      updated.userInfo.bloodType = value;
      return updated;
    });
  };

  const handleMedicalConditionSelectChange = (value: string) => {
    setCreateUser((prev) => {
      const updated = { ...prev };
      updated.userInfo.medicalCondition = value;
      return updated;
    });
  };

  return {
    step,
    createUser,
    handleNextStep,
    handlePrevStep,
    handleInputChange,
    handleCheckboxChange,
    handleConfirmation,
    handleSelectChange,
  };
}
