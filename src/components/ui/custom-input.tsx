interface inputProps {
  type: string;
  name: string;
  label: string;
  value: string | number | string[] | undefined;
  placeholder: string;
  required?: boolean;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({
  type,
  name,
  value,
  label,
  placeholder,
  required,
  changeHandler,
}: inputProps) {
  return (
    <label className="w-full">
      {label}
      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
        className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
      />
    </label>
  );
}
