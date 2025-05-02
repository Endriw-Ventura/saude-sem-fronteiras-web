"use client";

import CustomLabel from "./custom-label";

type CustomSelectProps = {
  itemList: SelectType[];
  value: number;
  label: string;
  changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
};

export default function CustomSelect({
  itemList,
  value,
  label,
  changeHandler,
  name,
}: CustomSelectProps) {
  return (
    <CustomLabel>
      {label}
      <select
        name={name}
        value={value}
        onChange={changeHandler}
        className="p-2 rounded bg-stone-500 border border-white text-stone-300"
      >
        {itemList.map((item, index) => (
          <option key={item.id.toString()} value={index}>
            {item.name}
          </option>
        ))}
      </select>
    </CustomLabel>
  );
}
