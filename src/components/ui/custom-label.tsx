interface CustomLabelProps {
  children: React.ReactNode;
  row?: boolean;
}

export default function CustomLabel({
  children,
  row = false,
}: CustomLabelProps) {
  return (
    <label
      className={`w-full flex ${row ? "flex-row justify-between" : "flex-col"}`}
    >
      {children}
    </label>
  );
}
