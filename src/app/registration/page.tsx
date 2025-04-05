'use client'

import { useState } from 'react'

interface FormData {
  name: string;
  email: string;
  address: string;
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
  });

  const nextStep = (): void => {
    setStep(step + 1);
  };

  const prevStep = (): void => {
    setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Name</h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <button
            className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold" 
            onClick={nextStep}>Next</button>

          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Email</h2>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <button
              className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
              onClick={prevStep}>
                Back
            </button>

            <button
              className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
              onClick={nextStep}>
                Next
            </button>

          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Address</h2>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <button
              className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
              onClick={prevStep}>
                Back
            </button>

            <button 
              className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"
              onClick={nextStep}>
                Submit
            </button>

          </div>
        );
      case 4:
        return (
          <div>
            <h2>Form Submitted</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Address: {formData.address}</p>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#272727] text-white space-y-2">
      { renderStep() }
    </main>
  )
};

export default MultiStepForm;
