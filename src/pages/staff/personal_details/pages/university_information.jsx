import DisabledInput from "../../../../components/DisabledInput";

export default function UniversityInformation() {
    return (
        <>
        <form  className="mb-8">
                <section id="inputs" className="flex flex-col gap-4">
                <h2 className="uppercase bg-primary-main text-white p-2 rounded-full">SSNIT & BANK DETAILS</h2>

                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        <DisabledInput label={'First Name'} value={"hope"} />
                        <DisabledInput label={'Middle Name(s)'} value={"hope"} />
                        <DisabledInput label={'Last Name'} value={"hope"} />

                    </div>
                    <h2 className="uppercase bg-primary-main text-white p-2 rounded-full">APPOINTMENT DETAILS</h2>
                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        <DisabledInput label={'Age'} value={"hope"} />
                        <DisabledInput label={'Date of Birth'} value={"hope"} />
                        <DisabledInput label={'Place of Birth'} value={"hope"} />

                    </div>
                    <h2 className="uppercase bg-primary-main text-white p-2 rounded-full">STAFF DETAILS</h2>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <DisabledInput label={'Home town'} value={"hope"} />
                        <DisabledInput label={'District'} value={"hope"} />
                        <DisabledInput label={'Region'} value={"hope"} />
                    </div>
                    

                </section>
                
            </form> 
    </>
    )
}