"use client";

import CustomMain from "@/components/ui/custom-main";
import NavButton from "@/components/ui/nav-button";

export default function Registration() {
  return (
    <CustomMain>
      <div className="flex flex-col justify-center items-center space-y-4 w-[20%]">  {/* Define a largura para os botões */}
        <NavButton route="/user-registration" buttonText={"Usuário"} />
        <NavButton route="/doctor-registration" buttonText={"Médico"} />
      </div>
    </CustomMain>
  );
}