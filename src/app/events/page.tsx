"use client";

import CustomButton from "@/components/ui/custom-button";
import CustomMain from "@/components/ui/custom-main";
import { useUser } from "@/hooks/use-user";
import { consultService } from "@/service/service-consult";
import { ConsultList } from "@/types/consult";
import { useEffect, useState } from "react";

export default function EventsPage() {
  const { loggedUser } = useUser(); // ✅ sempre no topo
  const [consults, setConsults] = useState<ConsultList[]>([]); // ✅ sempre no topo

  useEffect(() => {
    if (!loggedUser) return;

    const fetchItems = async () => {
      try {
        const response = await consultService.getUserConsults(
          loggedUser.id,
          loggedUser.role
        );
        setConsults(response);
      } catch (error) {
        console.error("Erro ao buscar os itens:", error);
      }
    };

    fetchItems();
  }, [loggedUser]);

  const handleRemover = async (id: number) => {
    try {
      await consultService.deleteConsult(id);
      setConsults((prev) => prev.filter((consult) => consult.id !== id));
    } catch (error) {
      console.error("Erro ao deletar consulta:", error);
    }
  };

  if (!loggedUser) {
    return null;
  }

  return (
    <CustomMain>
      <h1>Your Events</h1>
      {consults.length > 0 ? (
        consults.map((consult: ConsultList) => {
          const { pacient, doctor, moment, id } = consult;
          const [date, time] = moment.split("T");

          return (
            <div key={id.toString()} className="p-[8px] w-full">
              <table
                className="table-fixed border-collapse w-full"
                border={1}
                cellPadding="8"
                cellSpacing="0"
              >
                <thead className="text-center">
                  <tr>
                    <th className="w-1/6">Patients Name</th>
                    <th className="w-1/6">Doctors Name</th>
                    <th className="w-1/6">Date</th>
                    <th className="w-1/6">Time</th>
                    <th className="w-1/6">Value</th>
                    <th className="w-1/6">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>{`${pacient.name} ${pacient.surname}`}</td>
                    <td>{`${doctor.name} ${doctor.surname}`}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{`R$ ${doctor.price}`}</td>
                    <td>
                      <CustomButton clickHandler={() => handleRemover(id)}>
                        Cancel
                      </CustomButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      ) : (
        <p>No events Scheduled</p>
      )}
    </CustomMain>
  );
}
