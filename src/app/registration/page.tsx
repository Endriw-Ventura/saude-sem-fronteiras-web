'use client'

import User from '@/types/user';
import { useState } from 'react'

interface formData {
  user: User;
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const [createUser, setCreateUser] = useState<User | null>(null);

  const nextStep = (): void => {
    setStep(step + 1);
  };

  const prevStep = (): void => {
    setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCreateUser(null);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='flex flex-col justify-center'>
            <h2>Step 1: Basic Info</h2>

            <input
              type="text"
              name="name"
              value={createUser?.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="surname"
              value={createUser?.surname}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="cpf"
              value={createUser?.cpf}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="email"
              name="email"
              value={createUser?.email}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="password"
              name="password"
              value={createUser?.password}
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
          <div className='flex flex-col justify-center'>
            <h2>Step 2: Address</h2>

            <input
              type="text"
              name="country"
              value={createUser?.address.country}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="state"
              value={createUser?.address.state}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="city"
              value={createUser?.address.city}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="neighborhood"
              value={createUser?.address.neighborhood}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="streetName"
              value={createUser?.address.streetName}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="number"
              name="number"
              value={createUser?.address.number}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="complement"
              value={createUser?.address.complement}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

             <input
              type="number"
              name="zipCode"
              value={createUser?.address.zipCode}
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
          <div className='flex flex-col justify-center'>
            <h2>Step 3: Additional Info</h2>

            <input
              type="text"
              name="motherName"
              value={createUser?.userInfo.motherName}
              onChange={handleChange}
              placeholder="Enter your address"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="bloodType"
              value={createUser?.userInfo.bloodType}
              onChange={handleChange}
              placeholder="Enter your address"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />
            
            <input
              type="text"
              name="allergies"
              value={createUser?.userInfo.allergies}
              onChange={handleChange}
              placeholder="Enter your address"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="checkbox"
              name="previousCirurgies"
              checked={createUser?.userInfo.previousCirurgies}
              onChange={handleChange}
              placeholder="Enter your address"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

              <input
              type="text"
              name="cirurgies"
              value={createUser?.userInfo.cirurgies}
              onChange={handleChange}
              placeholder="Enter your address"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="medications"
              value={createUser?.userInfo.medications}
              onChange={handleChange}
              placeholder="Enter your address"
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />

            <input
              type="text"
              name="medicalCondition"
              value={createUser?.userInfo.medicalCondition}
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
          <div className='flex flex-col justify-center'>
            <h2>Form Submitted</h2>
            <p>Name: {createUser?.name}</p>
            <p>Email: {createUser?.email}</p>
            <p>Address: {createUser?.address.city}</p>
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
