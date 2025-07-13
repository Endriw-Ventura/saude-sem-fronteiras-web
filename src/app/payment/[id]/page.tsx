"use client";

import { useParams, useRouter } from "next/navigation";
import CustomMain from "@/components/ui/custom-main";
import CustomButton from "@/components/ui/custom-button";
import { useEffect, useState } from "react";
import { consultService } from "@/service/service-consult";
import { memoryStore } from "@/mocks/store/memoryStore";
import TextBlock from "@/components/ui/text-block";

export default function Payment() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const router = useRouter();
  const [consult, setConsult] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchConsult() {
      try {
        const consult = await consultService.getConsult(Number(id));
        const patient = memoryStore.users.find(
          (u: any) => u.id === consult.patientId
        );
        const doctor = memoryStore.users.find(
          (u: any) => u.id === consult.doctorId
        );
        setConsult(consult);
        const paymentText = `
Payment Guide - Consultation

Consultation ID: ${consult.id}
Patient: ${patient.name} ${patient.surname}
Doctor: ${doctor.name} ${doctor.surname}
Date: ${consult.moment.split("T")[0]}
Time: ${consult.moment.split("T")[1]}
Amount: $${doctor.price}

This is an automatically generated payment receipt (mock).
`;
        setText(paymentText);
      } catch {
        setConsult(null);
      }
    }
    fetchConsult();
  }, []);

  function handleDownload() {
    if (!consult) return;
    setDownloading(true);
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `payment-guide-${consult.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloading(false);
  }

  return (
    <CustomMain>
      <h1 className="text-xl font-bold mb-4">Payment Guide</h1>
      <TextBlock>{text}</TextBlock>
      <CustomButton clickHandler={handleDownload}>
        {downloading ? "Downloading..." : "Download Guide"}
      </CustomButton>
      <CustomButton clickHandler={() => router.back()}>Back</CustomButton>
    </CustomMain>
  );
}
