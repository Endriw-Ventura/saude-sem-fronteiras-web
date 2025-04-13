
'use client'

import Link from 'next/link';

export default function Registration() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#272727] text-white space-y-2">
        <button type="button" className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold">
          <Link href="/user-registration">
            Usuário
          </Link>
        </button>
        <button type="button" className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold">
          <Link href="/doctor-registration">
            Médico
          </Link>
        </button>
    </main>
  )
};