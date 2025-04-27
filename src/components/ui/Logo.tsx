import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="mb-0">
      <Image
        aria-hidden
        src="/logo.png"
        alt="Logo Icon"
        className="w-auto h-auto"
        width={420}
        height={320}
      />
    </div>
  );
}
