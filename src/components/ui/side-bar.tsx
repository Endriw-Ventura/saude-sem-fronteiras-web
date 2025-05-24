"use client";
import Link from "next/link";
import CustomButton from "./custom-button";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";
import { loginService } from "@/service/service-login";
import { useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { loggedUser, setLoggedUser } = useUser();
  const { doLogout } = loginService;

  const links = [
    { href: "/home", label: "Início" },
    { href: "/events", label: "Consultas" },
    { href: "/exams", label: "Exames" },
    { href: "/exam-schedule", label: "Marcar Exame" },
    { href: "/schedule", label: "Marcar Consulta" },
  ];

  const handleLogout = async () => {
    await loginService.doLogout(router);
    setLoggedUser(null);
    router.push("/");
  };

  if (!loggedUser) return null;

  return (
    <aside className="w-auto p-8 h-screen bg-[#272727] text-white flex flex-col justify-center items-center">
      <nav>
        <ul className="list-none p-0">
          {links.map((link) => (
            <li key={link.href} className="mb-4">
              <Link href={link.href}>
                <span
                  className={`cursor-pointer ${
                    pathname === link.href
                      ? "font-bold underline"
                      : "font-normal"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <CustomButton clickHandler={handleLogout}>Sair</CustomButton>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
