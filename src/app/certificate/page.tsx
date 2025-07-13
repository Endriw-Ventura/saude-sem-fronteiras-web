"use client";

import CustomMain from "@/components/ui/custom-main";
import CustomButton from "@/components/ui/custom-button";
import { useUser } from "@/hooks/use-user";
import { useState } from "react";
import TextBlock from "@/components/ui/text-block";
import { useRouter } from "next/navigation";

export default function Certificate() {
  const { loggedUser } = useUser();
  const [downloading, setDownloading] = useState(false);
  const router = useRouter();

  if (!loggedUser) return <p>Carregando...</p>;

  const certificateText = `
Medical Certificate

Patient: ${loggedUser.name} ${loggedUser.surname}
CPF: ${loggedUser.cpf || "-"}
Date: ${new Date().toLocaleDateString()}

I certify that the above-mentioned patient was under my care on this date and requires ${Math.floor(
    Math.random() * 10
  )} days of rest.

Doctor's Signature
CRM: 123456
`;

  function handleDownload() {
    setDownloading(true);
    const blob = new Blob([certificateText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `atestado-${loggedUser.name}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloading(false);
  }

  return (
    <CustomMain>
      <h1 className="text-xl font-bold mb-4">Medical Certificate</h1>
      <TextBlock>{certificateText}</TextBlock>
      <CustomButton clickHandler={handleDownload}>
        {downloading ? "Downloading..." : "Download Certificate"}
      </CustomButton>
      <CustomButton clickHandler={() => router.back()}>Back</CustomButton>
    </CustomMain>
  );
}
