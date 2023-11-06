import DisabledInput from "../../../../components/DisabledInput"

export default function TransferInformation(props) {
    return (
        <>
       <section id="inputs" className="flex flex-col gap-4 mb-8">
            <h2 className="uppercase bg-primary-main text-white p-2 px-4 rounded-full">Relationship: {props?.relation}</h2>
            <div className="flex flex-col md:flex-row gap-4 w-full">

               <DisabledInput label={'Transfer Date'} value={props?.date} />
               <DisabledInput label={'From Unit'} value={props?.fromunit} />
               <DisabledInput label={'To Unit'} value={props?.tounit} />

            </div>
            </section>
    </>
    )
}