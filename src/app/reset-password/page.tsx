"use client";

import CustomButton from "@/components/ui/custom-button";
import CustomForm from "@/components/ui/custom-form";
import CustomInput from "@/components/ui/custom-input";
import { emailService } from "@/service/service-email";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await emailService.resetPassword(token, password);
    router.push("/");
  };

  return (
    <CustomForm submitHandler={handleSubmit}>
      <h1>Reset Password</h1>
      <CustomInput
        type="password"
        name="password"
        label="Password"
        value={password}
        changeHandler={(e) => setPassword(e.target.value)}
        placeholder="New Password"
        required
      />
      <CustomButton type="submit">Submit</CustomButton>
    </CustomForm>
  );
}
