"use client";

import { User } from "@/types/user";
import CustomButton from "../ui/custom-button";

interface FormConfirmationProps {
  user: User;
  onConfirm: () => void;
  onBack: () => void;
}

export default function UserFormConfirmation({
  user,
  onConfirm,
  onBack,
}: FormConfirmationProps) {
  return (
    <>
      <h2 className="text-center">Confirm Data</h2>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Email: {user.email}</p>
      <p>CPF: {user.cpf}</p>
      <p>Country: {user.address.country}</p>
      <p>State: {user.address.state}</p>
      <p>City: {user.address.city}</p>
      <p>Neighborhood: {user.address.neighborhood}</p>
      <p>Street Name: {user.address.streetName}</p>
      <p>Number: {user.address.number}</p>
      <p>Zipcode: {user.address.zipCode}</p>
      <p>Mother's name: {user.userInfo.motherName}</p>
      <p>Blood Type: {user.userInfo.bloodType}</p>
      <p>Previous Surgeries: {user.userInfo.cirurgies}</p>
      <p>Medical Condition: {user.userInfo.medicalCondition}</p>
      <p>Allergies: {user.userInfo.allergies}</p>
      <p>Medications: {user.userInfo.medications}</p>
      <p>Surgeries: {user.userInfo.cirurgies}</p>

      <div className="flex w-full gap-10 justify-between mt-4">
        <CustomButton clickHandler={onBack}>Go Back</CustomButton>
        <CustomButton clickHandler={onConfirm}>Confirm</CustomButton>
      </div>
    </>
  );
}
