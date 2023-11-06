import DisabledInput from "../../../../components/DisabledInput"
export default function FamilyInformation(props) {
   return (
      <>
         <section id="inputs" className="flex flex-col gap-4 mb-8">
            <h2 className="uppercase bg-primary-main text-white p-2 px-4 rounded-full">Relationship: {props?.relation}</h2>
            <div className="flex flex-col md:flex-row gap-4 w-full">

               <DisabledInput label={'Full Name'} value={props?.name} />
               <DisabledInput label={'Hometown'} value={props?.hometown} />
               <DisabledInput label={'Address'} value={props?.address} />

            </div>



         </section>

      </>
   )
}