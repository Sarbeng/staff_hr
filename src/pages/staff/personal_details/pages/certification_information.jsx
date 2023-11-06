import DisabledInput from "../../../../components/DisabledInput"
export default function CertificationInformation(props) {
    return (
        <>
        <section id="inputs" className="flex flex-col gap-4 mb-8">
            <h2 className="uppercase bg-primary-main text-white p-1 px-4 rounded-full"></h2>
            <div className="flex flex-col md:flex-row gap-4 w-full">

               <DisabledInput label={'Institution'} value={props?.institution} />
               <DisabledInput label={'Qualification'} value={props?.qualify} />
               <DisabledInput label={'Program'} value={props?.specialize} />

            </div>
            </section>
    </>
    )
}