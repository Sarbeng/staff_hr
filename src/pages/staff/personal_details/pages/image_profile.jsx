export default function ImageProfile () {
    return (
        <>
             <div className="flex flex-col justfy-center items-center p-4 rounded-lg mb-8  gap-4 w-full">
                               
                               <img className="w-32 h-32 rounded-full object-cover" src="https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg" />
                               <h2 className="text-2xl">Kwadwo Sarbeng-Baafi</h2>
                               <section className="flex flex-row gap-4 justify-center items-center">
                                <h3 className="uppercase text-sm md:text-lg">16022</h3> 
                                <hr className="inline-block h-6 md:h-4 w-0.5  bg-primary-main opacity-100 dark:opacity-50" />
                                <h3 className="uppercase text-sm md:text-lg">Permanent Staff</h3> 
                                <hr className="inline-block h-6 md:h-4 w-0.5  bg-primary-main opacity-100 dark:opacity-50" />
                                <h3 className="uppercase  text-sm md:text-lg">Senior Staff</h3> 
                               </section>

                               
                           </div>
        </>
    )
}