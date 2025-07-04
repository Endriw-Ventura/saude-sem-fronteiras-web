"use client";

import CustomButton from "@/components/ui/custom-button";
import CustomForm from "@/components/ui/custom-form";
import CustomInput from "@/components/ui/custom-input";
import { emailService } from "@/service/service-email";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  useEffect(() => {
    if (!token) {
      toast.error("Token inválido ou ausente.");
      router.push("/");
    }
  }, [token, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const result = await emailService.resetPassword(token!, password);
        if (result?.status === 200) {
          toast.success("Senha redefinida com sucesso!");
          router.push("/");
        }
      } catch {
        toast.error("Erro ao redefinir a senha.");
      }
    } else {
      toast.error("As senhas não coincidem!");
    }
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
