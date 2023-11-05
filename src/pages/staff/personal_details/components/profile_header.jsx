export default function ProfileHeader (props) {
    return  (
       <>
         <section id="heading" className="flex flex-col gap-2  mb-8">
                        <div className="w-full md:w-fit  flex justify-center items-center gap-3">

                            <div className="flex gap-2 items-center">
                                <p className="text-primary-main text-2xl uppercase">{props?.title}</p>
                               
                            </div>

                        </div>
                        <hr className="inline-block w-full h-0.5  bg-primary-main opacity-100 dark:opacity-50" />
                    </section>
                   
       </>
    )
}