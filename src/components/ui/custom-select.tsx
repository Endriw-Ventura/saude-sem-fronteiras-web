"use client";

type CustomSelectProps<T> = {
  itemList: T[];
  value: T;
  label: string;
  handleOnChange: (value: T) => void;
  getLabel: (item: T) => string;
};

export default function CustomSelect<T>({
  itemList,
  value,
  label,
  handleOnChange,
  getLabel,
}: CustomSelectProps<T>) {
  return (
    <label className="w-full flex flex-col">
      {label}
      <select
        value={itemList.indexOf(value)}
        onChange={(e) => handleOnChange(itemList[Number(e.target.value)])}
        className="p-2 rounded bg-stone-500 border border-white text-stone-300"
      >
        <option value="-1">Select...</option>
        {itemList.map((item, index) => (
          <option key={index} value={index}>
            {getLabel(item)}
          </option>
        ))}
      </select>
    </label>
  );
}
