"use client";

import CustomMain from "@/components/ui/custom-main";
import { useUser } from "@/hooks/useUser";
import { consultService } from "@/service/service-consult";
import { ConsultList } from "@/types/consult";
import { useEffect, useState } from "react";

export default function EventsPage() {
  const { loggedUser } = useUser();
  const [consults, setConsults] = useState<ConsultList[]>([]);
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

  const handleRemover = async (id: Number) => {
    try {
      await consultService.deleteConsult(id);
      setConsults((prev) => prev.filter((consult) => consult.id !== id));
    } catch (error) {
      console.error("Erro ao deletar consulta:", error);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <CustomMain>
        <h1>Suas consultas</h1>
        {consults.length > 0 ? (
          consults.map((consult: ConsultList) => {
            const { pacient, doctor, moment, id } = consult;
            const dateTime = moment.split("T");
            const date = dateTime[0];
            const time = dateTime[1];
            return (
              <div className="p-[8px] w-full">
                <table
                  className="table-fixed border-collapse w-full"
                  border={1}
                  cellPadding="8"
                  cellSpacing="0"
                >
                  <thead className="text-center">
                    <tr>
                      <th className="w-1/6">Nome do Paciente</th>
                      <th className="w-1/6">Nome do Médico</th>
                      <th className="w-1/6">Data</th>
                      <th className="w-1/6">Hora</th>
                      <th className="w-1/6">Valor</th>
                      <th className="w-1/6">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr key={id.toString()}>
                      <td className="w-1/6">{`${pacient.name} ${pacient.surname}`}</td>
                      <td className="w-1/6">{`${doctor.name} ${doctor.surname}`}</td>
                      <td className="w-1/6">{date}</td>
                      <td className="w-1/6">{time}</td>
                      <td className="w-1/6">{`R$ ${doctor.price}`}</td>
                      <td className="w-1/6">
                        <button
                          onClick={() => handleRemover(id)}
                          className="text-red-600 hover:underline cursor-pointer"
                        >
                          Cancelar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })
        ) : (
          <p>Sem consultas marcadas</p>
        )}
      </CustomMain>
    </div>
  );
}
