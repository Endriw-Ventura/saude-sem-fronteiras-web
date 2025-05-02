"use client";

import { useMultiStepForm } from "@/hooks/use-multi-step-form";
import CustomMain from "@/components/ui/custom-main";
import UserFormConfirmation from "@/components/user-registration/form-step-confirmation";
import UserFormStepOne from "@/components/user-registration/form-step-one";
import UserFormStepTwo from "@/components/user-registration/form-step-two";
import UserFormStepThree from "@/components/user-registration/form-step-three";

export default function MultiStepForm() {
  const {
    step,
    handleNextStep,
    handlePrevStep,
    createUser,
    handleInputChange,
    handleCheckboxChange,
    handleConfirmation,
    handleSelectChange,
  } = useMultiStepForm();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <UserFormStepOne
            user={createUser}
            onChange={handleInputChange}
            onNext={handleNextStep}
          />
        );
      case 2:
        return (
          <UserFormStepTwo
            user={createUser}
            onChange={handleInputChange}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        );
      case 3:
        return (
          <UserFormStepThree
            user={createUser}
            onCheckboxChange={handleCheckboxChange}
            onNext={handleNextStep}
            onBack={handlePrevStep}
            onChange={handleInputChange}
            onSelectChange={handleSelectChange}
          />
        );
      case 4:
        return (
          <UserFormConfirmation
            user={createUser}
            onConfirm={handleConfirmation}
            onBack={handlePrevStep}
          />
        );
    }
  };

  return <CustomMain>{renderStep()}</CustomMain>;
}
