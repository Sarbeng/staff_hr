import { useState } from "react";
import {MdOutlineVisibility,MdOutlineVisibilityOff} from "react-icons/md"


export function PasswordInput (props){
    const [visible, setVisible] = useState(false)

   
    
    const handleVisibility = () => {
        setVisible(!visible)
    }

    
    return (
        <div id="inputGroup" >
      <label className="" htmlFor="email">
        {props.label}
      </label>
      <div  className={`flex justify-center items-center gap-3 border rounded-lg  rounded-large mt-2 ${props.inputStyle == "error" ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused" } `}>
      <input
        className=" h-12 rounded-lg w-full py-2 px-3 text-primary-main border-none focus:outline-none "
        name={props.name}
        type={visible ? "text" : "password"}
        value={props.value}
        ref={props.ref}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        
      />
      <a className="px-3" onClick={handleVisibility}>{visible ? <MdOutlineVisibility/> : <MdOutlineVisibilityOff/>}</a>
      </div>
    </div>
    );
}