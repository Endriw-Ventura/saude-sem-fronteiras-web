"use client";

import CustomMain from "@/components/ui/custom-main";
import NavButton from "@/components/ui/nav-button";

export default function Registration() {
  return (
    <CustomMain>
      <NavButton route="/user-registration" buttonText={"User"} />
      <NavButton route="/doctor-registration" buttonText={"Doctor"} />
    </CustomMain>
  );
}
