"use client";

import CustomInput from "../ui/custom-input";
import CustomButton from "../ui/custom-button";
import CustomCheckbox from "../ui/custom-checkbox";
import CustomSelect from "../ui/custom-select";
import { medicalConditionList } from "@/mocks/medical-condition-list";
import { bloodTypeList } from "@/mocks/blood-type-list";
import { User } from "@/types/user";
import { useState } from "react";

interface FormThreeProps {
  user: User;
  onNext: () => void;
  onBack: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function UserFormStepThree({
  user,
  onNext,
  onBack,
  onChange,
  onCheckboxChange,
  onSelectChange,
}: FormThreeProps) {
  const [isCheckedAllergies, setIsCheckedAllergies] = useState(false);
  const [isCheckedMedications, setIsCheckedMedications] = useState(false);
  const [isCheckedCirurgies, setIsCheckedCirurgies] = useState(false);

  return (
    <>
      <h2 className="text-center">Step 3: Additional Info</h2>

      <CustomInput
        type="text"
        name="motherName"
        value={user.userInfo.motherName}
        placeholder="Enter your mother's name"
        label="Mother's Name"
        changeHandler={onChange}
      />

      <CustomSelect
        name="bloodType"
        label="Blood Type"
        itemList={bloodTypeList}
        value={bloodTypeList.findIndex(
          (item) => item.name === user.userInfo.bloodType
        )}
        changeHandler={(e) => onSelectChange(e)}
      />

      <CustomCheckbox
        name="previousCirurgiesCheckbox"
        checked={isCheckedCirurgies}
        label="Previous Cirurgies"
        row
        changeHandler={(e) => setIsCheckedCirurgies(e.target.checked)}
      />

      {isCheckedCirurgies && (
        <CustomInput
          type="text"
          name="cirurgies"
          value={user.userInfo.cirurgies}
          placeholder="Enter your cirurgies"
          label="Cirurgies"
          changeHandler={onChange}
        />
      )}

      <CustomCheckbox
        name="allergiesCheckbox"
        checked={isCheckedAllergies}
        label="Known Allergies"
        row
        changeHandler={(e) => setIsCheckedAllergies(e.target.checked)}
      />

      {isCheckedAllergies && (
        <CustomInput
          type="text"
          name="allergies"
          value={user.userInfo.allergies}
          placeholder="Enter any allergies"
          label="Allergies"
          changeHandler={onChange}
        />
      )}

      <CustomCheckbox
        name="medicationsCheckbox"
        checked={isCheckedMedications}
        label="Medications"
        row
        changeHandler={(e) => setIsCheckedMedications(e.target.checked)}
      />

      {isCheckedMedications && (
        <CustomInput
          type="text"
          name="medications"
          value={user.userInfo.medications}
          placeholder="Enter your medications"
          label="Medications"
          changeHandler={onChange}
        />
      )}

      <CustomSelect
        name="medicalCondition"
        label="Medical Condition"
        itemList={medicalConditionList}
        value={medicalConditionList.findIndex(
          (item) => item.name === user.userInfo.medicalCondition
        )}
        changeHandler={(e) => onSelectChange(e)}
      />

      <div className="flex w-full gap-10 justify-between mt-4">
        <CustomButton clickHandler={onBack}>Back</CustomButton>
        <CustomButton clickHandler={onNext}>Submit</CustomButton>
      </div>
    </>
  );
}
