"use client";

import Logo from "@/components/ui/logo";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { loginService } from "@/service/service-login";
import { LoggedUser } from "@/types/logged-user";
import { useState } from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import NavButton from "@/components/ui/nav-button";
import CustomForm from "@/components/ui/custom-form";
import CustomMain from "@/components/ui/custom-main";

export default function LoginPage() {
  const router = useRouter();
  const { setLoggedUser, loggedUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    const data = await loginService.doLogin(email, password);
    const parsedData: LoggedUser = { ...data };
    setLoggedUser(parsedData);
    router.push("/home");
  };

  return (
    <CustomMain>
      <Logo />
      <CustomForm submitHandler={handleSubmit}>
        <CustomInput
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          changeHandler={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          changeHandler={(e) => setPassword(e.target.value)}
        />
        <CustomButton type="submit">Entrar</CustomButton>
        <NavButton route="/registration" buttonText="Cadastrar" />
        <NavButton route="/recover" buttonText="Esqueci minha senha" />
      </CustomForm>
    </CustomMain>
  );
}
