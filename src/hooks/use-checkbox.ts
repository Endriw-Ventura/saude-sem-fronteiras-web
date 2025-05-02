"use client";

import { useState } from "react";

export const useCheckbox = (initialValue = false) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleCheckboxChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      setIsChecked(e.target.checked);
    } else {
      setIsChecked((prev) => !prev);
    }
  };

  return { isChecked, setIsChecked, handleCheckboxChange };
};
