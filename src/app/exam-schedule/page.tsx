"use client";

import CustomMain from "@/components/ui/custom-main";
import { useUser } from "@/hooks/useUser";

export default function HomePage() {
  const { loggedUser } = useUser();
  const { role } = loggedUser!;

  return (
    <CustomMain>
      <p>In Construction</p>
    </CustomMain>
  );
}
