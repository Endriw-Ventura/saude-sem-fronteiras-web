import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="bg-black p-[30px] mb-[30px] rounded-md">
      <Image
        aria-hidden
        src="/images/logo.jpg"
        alt="Logo Icon"
        className="w-full h-auto"
        width={1200}
        height={600}
      />
      <h1>Saude Sem Fronteiras</h1>
    </div>
  );
}
