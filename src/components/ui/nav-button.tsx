import Link from "next/link";

interface NavButtonProps {
  route: string;
  buttonText: string;
}

export default function NavButton({ route, buttonText }: NavButtonProps) {
  return (
    <Link
      href={route}
      className="p-2 bg-[#272727] border border-white rounded text-center hover:bg-stone-400 text-white font-bold"
    >
      <button>{buttonText}</button>
    </Link>
  );
}
