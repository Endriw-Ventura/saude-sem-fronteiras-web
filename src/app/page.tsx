"use client";

import Logo from "@/components/ui/Logo";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";
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
  const { setLoggedUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const data = await loginService.doLogin(email, password);
    const parsedData: LoggedUser = { ...data.user };
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
          label="Email"
          value={email}
          changeHandler={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          changeHandler={(e) => setPassword(e.target.value)}
        />
        <CustomButton type="submit">Login</CustomButton>
        <NavButton route="/registration" buttonText="Register" />
        <NavButton route="/recover" buttonText="Forgot your Password?" />
      </CustomForm>
    </CustomMain>
  );
}
