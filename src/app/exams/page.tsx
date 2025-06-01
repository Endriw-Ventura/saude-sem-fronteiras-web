"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";
import CustomMain from "@/components/ui/custom-main";

export default function ExamsPage() {
  const router = useRouter();
  const { loggedUser } = useUser();

  if (!loggedUser) {
    router.push("/");
  }

  return (
    <CustomMain>
      <p>No Exams Scheluded</p>
    </CustomMain>
  );
}
