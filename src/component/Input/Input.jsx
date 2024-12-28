import React, { useId } from "react";
import { useSelector } from "react-redux";

const Input = React.forwardRef(
  ({ type = "text", label, placeholder, className = "",...props }, ref) => {

   const id = useId();
 
   const theme = useSelector((state)=> state.theme.theme)

    return (
      <div className="w-full flex flex-col gap-2">
        {label && <label className="text-gray-400" htmlFor={id}>{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          className={`px-3 py-2 border bg-transparent ${props.invalid && 'border-red-300'}  ${theme === "light" ? 'border-slate-300' : 'border-slate-600'}  bg-transprent rounded-lg ${className} `}
          {...props}
          ref={ref}
          id={id}
          autoComplete='off'
        />
      </div>
    );
  }
);

export default Input;