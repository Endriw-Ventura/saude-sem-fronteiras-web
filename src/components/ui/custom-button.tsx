interface buttonProps {
  children: React.ReactNode;
  clickHandler?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function CustomButton({
  children,
  clickHandler,
  type,
}: buttonProps) {
  return (
    <button
      type={type}
      className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
