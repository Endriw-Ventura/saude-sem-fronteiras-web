"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";
import CustomMain from "@/components/ui/custom-main";
/*import { consultService } from "@/service/service-consult";
import { Consult } from "@/types/consult";
import { useEffect, useState } from "react";
*/

export default function ExamsPage() {
  const router = useRouter();
  const { loggedUser } = useUser();

  if (!loggedUser) {
    router.push("/");
  }

  return (
    <CustomMain>
      <p>Sem exames marcados</p>
    </CustomMain>
  );
}
