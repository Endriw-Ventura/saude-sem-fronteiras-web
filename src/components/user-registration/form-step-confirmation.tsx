import { User } from "@/types/user";
import CustomButton from "../ui/CustomButton";

interface multiStepFormThreeProps {
  createUser: User;
  handleConfirmation: () => void;
  handlePreviousStep: () => void;
}

export default function UserFormConfirmation({
  createUser,
  handleConfirmation,
  handlePreviousStep,
}: multiStepFormThreeProps) {
  return (
    <div className="flex flex-col justify-around w-full h-screen p-[10%]">
      <h2 className="text-center">Form Submitted</h2>
      <p>Name: {createUser.name}</p>
      <p>Surname: {createUser.surname}</p>
      <p>Email: {createUser.email}</p>
      <p>CPF: {createUser.cpf}</p>
      <p>Country: {createUser.address.country}</p>
      <p>State: {createUser.address.state}</p>
      <p>City: {createUser.address.city}</p>
      <p>Neighborhood: {createUser.address.neighborhood}</p>
      <p>Street Name: {createUser.address.streetName}</p>
      <p>Number: {createUser.address.number}</p>
      <p>Zipcode: {createUser.address.zipCode}</p>
      <p>Mothers name: {createUser.userInfo.motherName}</p>
      <p>Blood Type: {createUser.userInfo.bloodType}</p>
      <p>
        Previous Cirurgies:{" "}
        {createUser.userInfo.previousCirurgies ? "Yes" : "No"}
      </p>
      <p>Medical Condition: {createUser.userInfo.medicalCondition}</p>
      <p>Allergies: {createUser.userInfo.allergies}</p>
      <p>Medications: {createUser.userInfo.medications}</p>
      <p>Cirurgies: {createUser.userInfo.cirurgies}</p>
      <CustomButton text={"Confirm"} clickHandler={handleConfirmation} />
      <CustomButton text={"Go back"} clickHandler={handlePreviousStep} />
    </div>
  );
}
