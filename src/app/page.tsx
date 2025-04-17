"use client";

import Logo from "@/components/ui/Logo";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { loginService } from "@/service/service-login";
import { LoggedUser } from "@/types/logged-user";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { setLoggedUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await loginService.doLogin(email, password);
    const parsedData: LoggedUser = { ...data };
    setLoggedUser(parsedData);
    router.push("/home");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#272727] text-white space-y-2">
      <Logo />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-sm space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded bg-stone-500 border border-white text-white"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded bg-stone-500 border border-white text-white"
        />

        <button
          type="submit"
          className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
        >
          Entrar
        </button>

        <Link
          href="/registration"
          className="p-2 bg-[#272727] border border-white rounded text-center hover:bg-stone-400 text-white font-bold"
        >
          <button>Cadastrar</button>
        </Link>

        <Link
          href="/recover"
          className="p-2 bg-[#272727] border border-white rounded text-center hover:bg-stone-400 text-white font-bold"
        >
          <button>Esqueci minha senha</button>
        </Link>
      </form>
    </main>
  );
}
