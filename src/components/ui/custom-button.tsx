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
      className="w-full p-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
