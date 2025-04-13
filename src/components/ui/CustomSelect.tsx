"use client";

import Specialty from "@/types/specialty";

interface selectProps {
  itemList: Specialty[];
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CustomSelect({
  itemList,
  value,
  handleOnChange,
}: selectProps) {
  return (
    <select
      value={value}
      onChange={handleOnChange}
      name="specialtyId"
      className="p-2 rounded bg-stone-500 border border-white text-stone-300"
    >
      <option value="">Select...</option>
      {itemList.map((item: Specialty) => (
        <option key={item.id.toString()} value={item.id.toString()}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
