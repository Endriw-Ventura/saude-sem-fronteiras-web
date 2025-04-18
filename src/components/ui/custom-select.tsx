"use client";

type CustomSelectProps<T> = {
  itemList: T[];
  value: T;
  handleOnChange: (value: T) => void;
  getLabel: (item: T) => string;
};

export default function CustomSelect<T>({
  itemList,
  value,
  handleOnChange,
  getLabel,
}: CustomSelectProps<T>) {
  return (
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
  );
}
