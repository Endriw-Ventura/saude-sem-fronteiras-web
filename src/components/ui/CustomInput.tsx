interface inputProps {
  type: string;
  name: string;
  value: string | number | string[] | undefined;
  placeholder: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({
  type,
  name,
  value,
  placeholder,
  changeHandler,
}: inputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={changeHandler}
      placeholder={placeholder}
      className="p-2 rounded bg-stone-500 border border-white text-white"
    />
  );
}
