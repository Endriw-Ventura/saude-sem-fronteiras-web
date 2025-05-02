"use client";

import CustomInput from "../ui/custom-input";
import CustomButton from "../ui/custom-button";
import { User } from "@/types/user";

interface FormTwoProps {
  user: User;
  onNext: () => void;
  onBack: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserFormStepTwo({
  user,
  onNext,
  onBack,
  onChange,
}: FormTwoProps) {
  return (
    <>
      <h2 className="text-center">Step 2: Address</h2>

      <CustomInput
        type="text"
        name="country"
        value={user.address.country}
        label="Country"
        placeholder="Enter your country"
        changeHandler={onChange}
      />
      <CustomInput
        type="text"
        name="state"
        value={user.address.state}
        label="State"
        placeholder="Enter your state"
        changeHandler={onChange}
      />
      <CustomInput
        type="text"
        name="city"
        value={user.address.city}
        placeholder="Enter your city"
        label="City"
        changeHandler={onChange}
      />
      <CustomInput
        type="text"
        name="neighborhood"
        value={user.address.neighborhood}
        placeholder="Enter your neighborhood"
        label="Neighborhood"
        changeHandler={onChange}
      />
      <CustomInput
        type="text"
        name="streetName"
        value={user.address.streetName}
        placeholder="Enter your street name"
        label="Street Name"
        changeHandler={onChange}
      />
      <CustomInput
        type="number"
        name="number"
        value={user.address.number}
        placeholder="Enter your house number"
        changeHandler={onChange}
        label="Number"
      />
      <CustomInput
        type="text"
        name="complement"
        value={user.address.complement}
        placeholder="Enter any complement"
        changeHandler={onChange}
        label="Complement"
      />
      <CustomInput
        type="number"
        name="zipCode"
        value={user.address.zipCode}
        placeholder="Enter your zip code"
        changeHandler={onChange}
        label="Zip Code"
      />

      <div className="flex w-full gap-10 justify-between mt-4">
        <CustomButton clickHandler={onBack}>Back</CustomButton>
        <CustomButton clickHandler={onNext}>Next</CustomButton>
      </div>
    </>
  );
}
