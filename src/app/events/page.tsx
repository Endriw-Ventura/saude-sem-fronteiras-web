"use client";

import { useUser } from "@/hooks/useUser";
import { consultService } from "@/service/service-consult";
import { Consult } from "@/types/consult";
import { useEffect, useState } from "react";

export default function EventsPage() {
  const { loggedUser } = useUser();
  const [consults, setConsults] = useState<Consult[]>([]);
  const { role } = loggedUser!;

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
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center">
        {consults.length > 0 ? (
          consults.map((consult) => {
            const { user, doctor, time, date } = consult;
            return (
              <div>
                <p>{`${user.name} ${user.surname}`}</p>
                <p>{`${user.email}`}</p>
                <p>{`${user.cpf}`}</p>
                <p>{`${doctor.name} ${doctor.surname}`}</p>
                <p>{`${doctor.email}`}</p>
                <p>{`${date} ${time}`}</p>
              </div>
            );
          })
        ) : (
          <p>Sem consultas marcadas</p>
        )}
      </main>
    </div>
  );
}
