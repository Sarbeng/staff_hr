
  
  export default function TextInput({label, Style, inputStyle, value, ref, handleChange, handleBlur, htmlFor, type, name}) {
    
    // style for the default state
    const defaultStyle = "mt-2 mb-2 h-12 border border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white ";
  
    //styling for the error state
    const errortStyle = "mt-2 mb-2 h-12 border border-red-600 rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-red-500 focus:ring-1 shadow-sm focus:ring-red-500 ";
    //styling for the success state
  
   
    return (
      <div id="inputGroup" >
        <label className="capitalize" htmlFor="email">
          {label}
        </label>
        <input
          className={`${Style} ${inputStyle =="error" ? errortStyle : defaultStyle} `}
          name={name}
          type={type}
          value={value}
          ref={ref}
          onChange={handleChange}
          // eslint-disable-next-line react/prop-types
          onBlur={handleBlur}
          
        />
      </div>
    );
  }
  