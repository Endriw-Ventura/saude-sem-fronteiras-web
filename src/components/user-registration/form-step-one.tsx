import User from "@/types/user";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";


interface multiStepFormOneProps{
  createUser: User;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
}

export default function UserFormStepOne({ createUser, handleInputChange, handleNextStep }: multiStepFormOneProps){
    return(
    <div className='flex flex-col justify-around w-full h-screen p-[10%]'>
                <h2 className='text-center'>Step 1: Basic Info</h2>
                <CustomInput 
                  type='text' 
                  name='name' 
                  value={createUser.name} 
                  placeholder='Enter your name' 
                  changeHandler={handleInputChange} 
                />    
                <CustomInput 
                  type='text' 
                  name='surname' 
                  value={createUser.surname} 
                  placeholder='Enter your surname' 
                  changeHandler={handleInputChange}
                />
                <CustomInput 
                  type='text' 
                  name='cpf' 
                  value={createUser?.cpf} 
                  placeholder='Enter your CPF' 
                  changeHandler={handleInputChange}
                />
                <CustomInput 
                  type='email' 
                  name='email' 
                  value={createUser?.email} 
                  placeholder='Enter your email' 
                  changeHandler={handleInputChange}
                />
                <CustomInput 
                  type='password' 
                  name='password' 
                  value={createUser?.password} 
                  placeholder='Enter your password' 
                  changeHandler={handleInputChange}
                />
                <CustomButton 
                  text={'Next'} 
                  clickHandler={handleNextStep}
                />
      </div>
    )
}