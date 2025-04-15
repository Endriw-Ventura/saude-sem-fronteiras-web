"use client";
import UserFormConfirmation from "@/components/user-registration/form-step-confirmation";
import UserFormStepOne from "@/components/user-registration/form-step-one";
import UserFormStepThree from "@/components/user-registration/form-step-three";
import UserFormStepTwo from "@/components/user-registration/form-step-two";
import { User, defaultUser } from "@/types/user";
import { useState } from "react";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const [createUser, setCreateUser] = useState<User>(defaultUser);

  const nextStep = (): void => {
    setStep(step + 1);
  };

  const prevStep = (): void => {
    setStep(step - 1);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    updateUser(name, value);
  };

  const confirmation = (): void => {};

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateUser(name, checked);
  };

  const updateUser = (name: string, value: string | boolean) => {
    const keys = name.split(".");

    setCreateUser((prevUser) => {
      const updatedUser = { ...prevUser };

      if (keys.length === 1) {
        updatedUser[name as keyof User] = value as any;
      } else if (keys.length === 2) {
        const [parent, child] = keys;

        if (parent === "userInfo") {
          updatedUser.userInfo = {
            ...updatedUser.userInfo,
            [child]: value,
          };
        } else if (parent === "address") {
          updatedUser.address = {
            ...updatedUser.address,
            [child]: value,
          };
        }
      }

      return updatedUser;
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <UserFormStepOne
            createUser={createUser}
            handleInputChange={handleInputChange}
            handleNextStep={nextStep}
          />
        );
      case 2:
        return (
          <UserFormStepTwo
            createUser={createUser}
            handleInputChange={handleInputChange}
            handleNextStep={nextStep}
            handlePreviousStep={prevStep}
          />
        );
      case 3:
        return (
          <UserFormStepThree
            createUser={createUser}
            handleInputChange={handleInputChange}
            handleNextStep={nextStep}
            handlePreviousStep={prevStep}
            handleCheckboxChange={handleCheckboxChange}
          />
        );
      case 4:
        return (
          <UserFormConfirmation
            handleConfirmation={confirmation}
            createUser={createUser}
            {...confirmation}
            handlePreviousStep={prevStep}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#272727] text-white space-y-2">
      {renderStep()}
    </main>
  );
};

export default MultiStepForm;
