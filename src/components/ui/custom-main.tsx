interface CustomMainProps {
  children: React.ReactNode;
}

export default function CustomMain({ children }: CustomMainProps) {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center">
      {children}
    </main>
  );
}
