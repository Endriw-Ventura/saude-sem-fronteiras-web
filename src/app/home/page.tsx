"use client";

import { useUser } from "@/hooks/useUser";
import Link from "next/link";

export default function HomePage() {
  const { loggedUser } = useUser();
  const { role } = loggedUser!;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center">
        {role == "doctor" ? (
          <Link
            href={"/homeDoctor"}
            className="p-2 bg-[#272727] border border-white rounded text-center hover:bg-stone-400 text-white font-bold"
          >
            <button>Doctor</button>
          </Link>
        ) : (
          <Link
            href={"/homeUser"}
            className="p-2 bg-[#272727] border border-white rounded text-center hover:bg-stone-400 text-white font-bold"
          >
            <button>User</button>
          </Link>
        )}
      </main>
    </div>
  );
}
