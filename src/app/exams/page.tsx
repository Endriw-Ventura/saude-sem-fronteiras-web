"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
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
  const { role } = loggedUser!;
  /*const [consults, setConsults] = useState<Consult[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await consultService.getUserConsults(
          loggedUser!.id,
          role
        );
        setConsults(response);
      } catch (error) {
        console.error("Erro ao buscar os itens:", error);
      }
    };
    fetchItems();
  }, []);*/

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <CustomMain>
        <p>Sem exames marcados</p>
      </CustomMain>
    </div>
  );
}
