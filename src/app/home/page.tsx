"use client";

import CustomMain from "@/components/ui/custom-main";
import NavButton from "@/components/ui/nav-button";
import { useUser } from "@/hooks/use-user";

export default function HomePage() {
  const { loggedUser } = useUser();

  if (!loggedUser) {
    return <p>Carregando usuário...</p>;
  }

  const { role } = loggedUser;

  return (
    <CustomMain>
      <NavButton route="/events" buttonText="Consultas" />
      <NavButton route="/exams" buttonText="Exames" />
      {role == "user" ? (
        <NavButton route="/schedule" buttonText="Agendar" />
      ) : (
        <NavButton route="/exam-schedule" buttonText="Marcar Exames" />
      )}
    </CustomMain>
  );
}
