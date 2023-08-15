
export default function SelectInput(props) {
    const  option = props?.options.map((options)=> <option key={options.id}>{options.text}</option>)
    return (
        <>
        <label className="capitalize" htmlFor="">

        </label>
            <select name={props.name} className={` h-12 border border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white`}>
                <option selected disabled>Select {props?.disabledOption}</option>
                {option}
            </select>
        </>
    );
}