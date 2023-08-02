
  
  export default function TextInput(props) {
    
    // style for the default state
    const defaultStyle = "mt-2 mb-2 h-12 border border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white ";
  
    //styling for the error state
    const errortStyle = "mt-2 mb-2 h-12 border border-red-600 rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-red-500 focus:ring-1 shadow-sm focus:ring-red-500 ";
    //styling for the success state
  
   
    return (
      <div id="inputGroup" >
        <label className="capitalize" htmlFor="email">
          {props.label}
        </label>
        <input
          className={`${props.Style} ${props.inputStyle =="error" ? errortStyle : defaultStyle} `}
          name={props.name}
          type={props.type}
          value={props.value}
          ref={props.ref}
          onChange={props.handleChange}
          // eslint-disable-next-line react/prop-types
          onBlur={props.handleBlur}
          
        />
      </div>
    );
  }
  