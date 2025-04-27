"use client";

import CustomButton from "@/components/ui/custom-button";
import CustomInput from "@/components/ui/custom-input";
import CustomMain from "@/components/ui/custom-main";
import { useState } from "react";

export default function RecoverPage() {
  const [email, setEmail] = useState("");
  return (
    <CustomMain>
      <CustomInput
        type="email"
        name="email"
        label="Email"
        value={email}
        placeholder="Enter your email"
        changeHandler={(e) => {
          setEmail(e.target.value);
        }}
      />

      <CustomButton>Send request</CustomButton>
    </CustomMain>
  );
}
