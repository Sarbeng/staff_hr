export default function ImageProfile (props) {
    return (
        <>
             <div className="flex flex-col justfy-center items-center p-4 rounded-lg mb-8  gap-4 w-full">
                               
                               <img className="w-32 h-32 border border-primary-main rounded-full object-cover" src={`https://ehub.ucc.edu.gh/api/photos/?tag=${props.staff_picture}`} />
                               <h2 className="text-2xl">{props.fname} {props.mname} {props.lname}</h2>
                               <section className="flex flex-row gap-4 justify-center items-center">
                                <h3 className="uppercase text-sm md:text-lg">{props.staff_no}</h3> 
                                <hr className="inline-block h-6 md:h-4 w-0.5  bg-primary-main opacity-100 dark:opacity-50" />
                                <h3 className="uppercase text-sm md:text-lg">{props.staff_status}</h3> 
                                <hr className="inline-block h-6 md:h-4 w-0.5  bg-primary-main opacity-100 dark:opacity-50" />
                                <h3 className="uppercase  text-sm md:text-lg">{props.staff_group}</h3> 
                               </section>

                               
                           </div>
        </>
    )
}