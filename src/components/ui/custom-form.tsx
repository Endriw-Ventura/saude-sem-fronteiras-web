interface CustomFormProps {
  children: React.ReactNode;
  submitHandler: (e: React.FormEvent) => Promise<void>;
}

export default function CustomForm({
  children,
  submitHandler,
}: CustomFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitHandler(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-sm space-y-4 row-start-2 items-center justify-items-center"
    >
      {children}
    </form>
  );
}
