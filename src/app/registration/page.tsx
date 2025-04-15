"use client";

import Link from "next/link";

export default function Registration() {
  return (
    <main className="flex flex-col items-center gap-4 justify-center min-h-screen p-4 bg-[#272727] text-white space-y-2">
      <Link
        href="/user-registration"
        className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
      >
        <button type="button">Usuário</button>
      </Link>

      <Link
        href="/doctor-registration"
        className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
      >
        <button type="button">Médico</button>
      </Link>
    </main>
  );
}
