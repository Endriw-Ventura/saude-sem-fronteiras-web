
'use client'

import Logo from '@/components/ui/Logo'
import { userService } from '@/service/service-user'
import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#272727] text-white space-y-2">
      <Logo />
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm space-y-4">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-2 rounded bg-stone-500 border border-white text-white"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          className="p-2 rounded bg-stone-500 border border-white text-white"
        />

        <button type="submit" className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold">
          Entrar
        </button>

        <button type="button" className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold">
          <Link href="/registration">
            Cadastrar
          </Link>
        </button>

        <button type="button" className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold">
          <Link href="/recover">
            Esqueci minha senha
          </Link>
        </button>
      </form>
    </main>
  )
}
