
import DisabledInput from "../../../../components/DisabledInput";

export default function PersonalInformation(props) {
    return (
        <>
            <form  className="mb-8">
                <section id="inputs" className="flex flex-col gap-4">

               
                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        <DisabledInput label={'First Name'} value={props?.fname} />
                        <DisabledInput label={'Middle Name(s)'} value={props?.mname} />
                        <DisabledInput label={'Last Name'} value={props?.lname} />

                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        <DisabledInput label={'Age'} value={props.age} />
                        <DisabledInput label={'Date of Birth'} value={props.dob} />
                        <DisabledInput label={'Place of Birth'} value={props.birth_place} />

                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <DisabledInput label={'Home town'} value={props.hometown} />
                        <DisabledInput label={'District'} value={props.district} />
                        <DisabledInput label={'Region'} value={props.region} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <DisabledInput label={'Nationality'} value={props.nationality} />
                        <DisabledInput label={'Home Address'} value={props.address} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <DisabledInput label={'Phone Number'} value={props.phone} />
                        <DisabledInput label={'Email'} value={props.ucc_mail} />
                    </div>

                </section>
                
            </form>
        </>
    )
}