"use client";

import CustomMain from "@/components/ui/custom-main";
import NavButton from "@/components/ui/nav-button";
import { useUser } from "@/hooks/use-user";

export default function HomePage() {
  const { loggedUser } = useUser();

  if (!loggedUser) {
    return <p>Loading User...</p>;
  }

  const { role } = loggedUser;

  return (
    <CustomMain>
      <NavButton route="/events" buttonText="Events" />
      <NavButton route="/exams" buttonText="Exams" />
      {role == "user" ? (
        <NavButton route="/schedule" buttonText="Schedule Event" />
      ) : (
        <NavButton route="/exam-schedule" buttonText="Schedule Exam" />
      )}
    </CustomMain>
  );
}
