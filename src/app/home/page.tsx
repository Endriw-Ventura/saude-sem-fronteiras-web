"use client";

import CustomMain from "@/components/ui/custom-main";
import NavButton from "@/components/ui/nav-button";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { loggedUser } = useUser();
  const router = useRouter();

  if (!loggedUser) {
    router.push("/");
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
      <NavButton route="/profile" buttonText="Profile" />
      <NavButton route="/edit-profile" buttonText="Edit Profile" />
    </CustomMain>
  );
}
