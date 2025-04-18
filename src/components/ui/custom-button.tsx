
interface buttonProps {
    text: string,
    clickHandler: () => void
}

export default function CustomButton({ text, clickHandler }: buttonProps){
    return(
         <button
            className="p-2 bg-[#272727] border border-white rounded hover:bg-stone-400 text-white font-bold"  
            onClick={clickHandler}>
                {text}
            </button>
    );
}
