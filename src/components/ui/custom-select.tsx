"use client";

import { SelectType } from "@/types/select-type";
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
        {itemList.map((item) => (
          <option key={item.id.toString()} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </CustomLabel>
  );
}
