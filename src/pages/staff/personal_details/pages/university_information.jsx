import DisabledInput from "../../../../components/DisabledInput";

export default function UniversityInformation(props) {
    return (
        <>
        <form  className="mb-8">
                <section id="inputs" className="flex flex-col gap-4">
                <h2 className="uppercase bg-primary-main text-white p-2 rounded-full">SSNIT & BANK DETAILS</h2>

                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        <DisabledInput label={'Ssnit Number'} value={props.ssnit_no} />
                        <DisabledInput label={'Bank Account Number'} value={props.account_no} />
                        <DisabledInput label={'Bank Name (Branch)'} value={props.bank_name + " " + "(" + props.account_branch + ")"} />

                    </div>
                    <h2 className="uppercase bg-primary-main text-white p-2 rounded-full">APPOINTMENT DETAILS</h2>
                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        <DisabledInput label={'Current Designation'} value={props.current_designation} />
                        <DisabledInput label={'Current Appointment Date'} value={props.appointment_date} />

                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        
                        <DisabledInput label={'First Appointment Date'} value={props.first_appointment_date} />
                        <DisabledInput label={'First Confirmation Date'} value={props.first_confirmation_date} />

                    </div>
                    <h2 className="uppercase bg-primary-main text-white p-2 rounded-full">STAFF DETAILS</h2>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <DisabledInput label={'University Staff Number'} value={props.staff_no} />
                        <DisabledInput label={'University E-Mail'} value={props.ucc_mail} />
                        <DisabledInput label={'Salary & Grade'} value={props.grade} />
                    </div>
                    

                </section>
                
            </form> 
    </>
    )
}