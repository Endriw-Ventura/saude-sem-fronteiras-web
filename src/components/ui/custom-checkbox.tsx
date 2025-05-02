import CustomLabel from "./custom-label";

interface InputProps {
  name: string;
  label: string;
  checked: boolean;
  row?: boolean;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomCheckbox({
  name,
  label,
  checked,
  row = false,
  changeHandler,
}: InputProps) {
  return (
    <CustomLabel row={row}>
      {label}
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={changeHandler}
        className="p-2 rounded bg-stone-500 border border-white text-white"
      />
    </CustomLabel>
  );
}
