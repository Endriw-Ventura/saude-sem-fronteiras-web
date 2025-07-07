"use client";

import { useState } from "react";
import { userService } from "@/service/service-user";
import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";
import CustomForm from "@/components/ui/custom-form";
import NavButton from "@/components/ui/nav-button";
import { useUser } from "@/hooks/use-user";

export default function EditProfile() {
  const router = useRouter();
  const { loggedUser, setLoggedUser } = useUser();
  const [userData, setUserData] = useState<any | null>(loggedUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await userService.editUser(userData.id, userData);
    setUserData(response.data);
    setLoggedUser(response.data);
    router.push("/profile");
  };

  if (!loggedUser) {
    router.push("/");
    return <p>Loading User...</p>;
  }

  return (
    <CustomForm submitHandler={handleSubmit}>
      <h1 className="text-xl font-bold mb-4">Edit Profile</h1>

      <CustomInput
        name="name"
        label="Name"
        value={userData.name}
        changeHandler={handleChange}
        type="text"
        placeholder={"Change your name"}
      />

      <CustomInput
        name="surname"
        label="Surname"
        value={userData.surname}
        changeHandler={handleChange}
        type="text"
        placeholder={"Change your surname"}
      />

      <CustomInput
        name="email"
        label="Email"
        value={userData.email}
        changeHandler={handleChange}
        type="email"
        placeholder={"Change your email"}
      />

      <CustomButton type="submit">Save</CustomButton>
      <NavButton route="/profile" buttonText="Cancel" />
    </CustomForm>
  );
}
