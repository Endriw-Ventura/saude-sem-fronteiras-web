import Link from "next/link";

interface NavButtonProps {
  route: string;
  buttonText: string;
}

export default function NavButton({ route, buttonText }: NavButtonProps) {
  return (
    <Link
      href={route}
      className="block w-full rounded-xl text-center p-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
    >
      {buttonText}
    </Link>
  );
}
