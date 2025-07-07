"use client";

import NavButton from "@/components/ui/nav-button";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const { loggedUser } = useUser();
  const router = useRouter();

  if (!loggedUser) {
    router.push("/");
    return <p>Loading user profile...</p>;
  }

  return (
    <div className="user-profile">
      <h2>{`${loggedUser.role}`} profile</h2>
      <p>
        <strong>Name:</strong> {loggedUser.name}
      </p>
      <p>
        <strong>Surname:</strong> {loggedUser.surname}
      </p>
      <p>
        <strong>Email:</strong> {loggedUser.email}
      </p>
      {loggedUser.role === "user" && (
        <>
          <p>
            <strong>CPF:</strong> {loggedUser.cpf}
          </p>
          <p>
            <strong>Mother Name:</strong> {loggedUser.userInfo.motherName}
          </p>
          <p>
            <strong>Blood Type:</strong> {loggedUser.userInfo.bloodType}
          </p>
          <p>
            <strong>Allergies:</strong>
          </p>
          {loggedUser.userInfo.allergies.length > 0 ? (
            <ul>
              {loggedUser.userInfo.allergies.map(
                (allergy: string, index: number) => (
                  <li key={index}>{allergy}</li>
                )
              )}
            </ul>
          ) : (
            <p>No allergies</p>
          )}
          <p>
            <strong>Cirurgies:</strong>
          </p>
          {loggedUser.userInfo.cirurgies.length > 0 ? (
            <ul>
              {loggedUser.userInfo.cirurgies.map(
                (surgery: string, index: number) => (
                  <li key={index}>{surgery}</li>
                )
              )}
            </ul>
          ) : (
            <p>No cirurgies</p>
          )}
          <p>
            <strong>Medications:</strong>
          </p>
          {loggedUser.userInfo.medications.length > 0 ? (
            <ul>
              {loggedUser.userInfo.medications.map(
                (medication: string, index: number) => (
                  <li key={index}>{medication}</li>
                )
              )}
            </ul>
          ) : (
            <p>No Medications</p>
          )}
          <p>
            <strong>Medical Condition:</strong>{" "}
            {loggedUser.userInfo.medicalCondition}
          </p>
          <p>
            <strong>Address:</strong>
            {`${loggedUser.address.streetName}, 
            ${loggedUser.address.number}, 
            ${loggedUser.address.neighborhood}, 
            ${loggedUser.address.city}, 
            ${loggedUser.address.state}, 
            ${loggedUser.address.country} - ${loggedUser.address.zipCode}`}
          </p>
        </>
      )}
      <NavButton route="/edit-profile" buttonText="Edit Profile" />
    </div>
  );
}
