"use client";

import CustomButton from "@/components/ui/custom-button";
import CustomInput from "@/components/ui/custom-input";

export default function RecoverPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center">
        <CustomInput
          type={"email"}
          name={"email"}
          value={""}
          placeholder={"Enter your email"}
          changeHandler={() => {}}
        />

        <CustomButton text={"Send request"} clickHandler={() => {}} />
      </main>
    </div>
  );
}
