import { User } from "@/types/user";
import CustomInput from "../ui/custom-input";
import CustomButton from "../ui/custom-button";
import CustomCheckbox from "../ui/custom-checkbox";

interface multiStepFormThreeProps {
  createUser: User;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export default function UserFormStepThree({
  createUser,
  handleInputChange,
  handleNextStep,
  handlePreviousStep,
  handleCheckboxChange,
}: multiStepFormThreeProps) {
  return (
    <div className="flex flex-col justify-around w-full h-screen p-[10%]">
      <h2 className="text-center">Step 3: Additional Info</h2>
      <CustomInput
        type="text"
        name="userInfo.motherName"
        value={createUser?.userInfo.motherName}
        placeholder="Enter your mothers name"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="text"
        name="userInfo.bloodType"
        value={createUser?.userInfo.bloodType}
        placeholder="Enter your bloodType"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="text"
        name="userInfo.allergies"
        value={createUser?.userInfo.allergies}
        placeholder="Enter any allergies"
        changeHandler={handleInputChange}
      />
      <CustomCheckbox
        type="checkbox"
        name="userInfo.previousCirurgies"
        checked={createUser?.userInfo.previousCirurgies!}
        placeholder="Enter if you have previous cirurgies"
        changeHandler={handleCheckboxChange}
      />
      <CustomInput
        type="text"
        name="userInfo.cirurgies"
        value={createUser?.userInfo.cirurgies}
        placeholder="Enter your cirurgies"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="text"
        name="userInfo.medications"
        value={createUser?.userInfo.medications}
        placeholder="Enter your medications"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="text"
        name="userInfo.medicalCondition"
        value={createUser?.userInfo.medicalCondition}
        placeholder="Enter any medical condition"
        changeHandler={handleInputChange}
      />
      <CustomButton text="Back" clickHandler={handlePreviousStep} />
      <CustomButton text="Submit" clickHandler={handleNextStep} />
    </div>
  );
}
