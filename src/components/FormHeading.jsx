export default function FormHeading(props) {
    return (
        <section id="heading" className="flex items-center flex-col gap-6 justify-center mb-8  ">
            <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex flex-col justify-center items-center gap-3">

                <div className="flex gap-2 items-center flex-col md:flex-row">
                    <p className="text-primary-main capitalize">{props.formName}</p>
                    <hr className="inline-block w-full md:h-full md:min-h-[1.5em] h-0.5 md:w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                    <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">{props.pageNumber}</p>
                </div>


            </div>
            <h1 className="text-center text-lg md:text-xl  mb-6">{props.pageHeader}</h1>
        </section>
    );
}