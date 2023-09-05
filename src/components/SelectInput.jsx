
export default function SelectInput({options, name,disabledOption, label, handleChange, handleBlur,value}) {
    const  option = options.map((options)=> <option key={options.id}>{options.text}</option>)
    return (
        <section className="flex flex-col w-full">
        <label className="capitalize" htmlFor="">
            {label}
        </label>
            <select name={name} onChange={handleChange} onBlur={handleBlur} value={value} className={` h-12 border border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white`}>
                <option selected disabled>Select {disabledOption}</option>
                {option}
            </select>
        </section>
    );
}