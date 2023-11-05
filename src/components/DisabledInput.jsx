export default function DisabledInput (props) {
    return (
        <>
            <div id="inputGroup" className="flex flex-col w-full md:w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        {props?.label}
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="email"
                                        type="text"
                                        value={props?.value}
                                        disabled
                                        readOnly
                                       

                                    />
                                   
                                </div>
        </>
    )
}