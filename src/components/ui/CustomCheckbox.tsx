

interface inputProps{
    type: string,
    name: string,
    checked: boolean,
    placeholder: string,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomCheckbox({ type, name, placeholder, checked, changeHandler }: inputProps){
    return(
         <input
              type={type}
              name={name}
              checked={checked}
              onChange={changeHandler}
              placeholder={placeholder}
              className="p-2 rounded bg-stone-500 border border-white text-white"
            />
    );
}