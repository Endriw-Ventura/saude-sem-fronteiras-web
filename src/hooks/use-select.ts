import { SelectType } from "@/types/select-type";
import { useState } from "react";

export function useSelect(itemList: SelectType[]) {
  const [selectedItem, setSelectedItem] = useState<SelectType>(itemList[0]);

  const handleChange = (index: number) => {
    setSelectedItem(itemList[index]);
  };

  return {
    selectedItem,
    setSelectedItem,
    handleChange,
  };
}
