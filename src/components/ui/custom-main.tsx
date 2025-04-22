interface CustomMainProps {
  children: React.ReactNode;
}

export default function CustomMain({ children }: CustomMainProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#272727] text-white space-y-2">
      {children}
    </main>
  );
}
