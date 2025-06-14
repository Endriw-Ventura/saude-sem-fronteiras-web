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
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const result = await emailService.resetPassword(token, password);
      if (result?.status === 200) router.push("/");
    } else toast.error("Passwords dont match!");
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
      <CustomInput
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        value={confirmPassword}
        changeHandler={(e) => setconfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      <CustomButton type="submit">Submit</CustomButton>
    </CustomForm>
  );
}
