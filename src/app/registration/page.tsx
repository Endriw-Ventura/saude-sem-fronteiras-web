"use client";

import CustomMain from "@/components/ui/custom-main";
import NavButton from "@/components/ui/nav-button";

export default function Registration() {
  return (
    <CustomMain>
      <NavButton route="/user-registration" buttonText={"Usuário"} />
      <NavButton route="/doctor-registration" buttonText={"Médico"} />
    </CustomMain>
  );
}
