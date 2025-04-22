import { User } from "@/types/user";
import CustomInput from "../ui/custom-input";
import CustomButton from "../ui/custom-button";

interface multiStepFormTwoProps {
  createUser: User;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export default function UserFormStepTwo({
  createUser,
  handleInputChange,
  handleNextStep,
  handlePreviousStep,
}: multiStepFormTwoProps) {
  return (
    <div className="flex flex-col justify-around w-full h-screen p-[10%]">
      <h2 className="text-center">Step 2: Address</h2>
      <CustomInput
        type="text"
        name="address.country"
        value={createUser.address.country}
        placeholder="Enter your country"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="text"
        name="address.state"
        value={createUser.address.state}
        placeholder="Enter your state"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="text"
        name="address.city"
        value={createUser.address.city}
        placeholder="Enter your city"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="text"
        name="address.neighborhood"
        value={createUser.address.neighborhood}
        placeholder="Enter your neighborhood"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="text"
        name="address.streetName"
        value={createUser.address.streetName}
        placeholder="Enter your street name"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="number"
        name="address.number"
        value={createUser.address.number}
        placeholder="Enter your house number"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="text"
        name="address.complement"
        value={createUser.address.complement}
        placeholder="Enter any complement"
        changeHandler={handleInputChange}
      />
      <CustomInput
        type="number"
        name="address.zipCode"
        value={createUser.address.zipCode}
        placeholder="Enter your zipCode"
        changeHandler={handleInputChange}
      />
      <CustomButton clickHandler={handlePreviousStep}>Back</CustomButton>
      <CustomButton clickHandler={handleNextStep}>Next</CustomButton>
    </div>
  );
}
