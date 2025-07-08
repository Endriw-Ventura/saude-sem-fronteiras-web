interface CustomMainProps {
  children: React.ReactNode;
}

export default function CustomMain({ children }: CustomMainProps) {
  return (
    <main className="flex flex-col items-center justify-evenly bg-[#272727] p-8 rounded-lg h-auto min-h-[75%] w-[70%] overflow-y-auto">
      {children}
    </main>
  );
}
