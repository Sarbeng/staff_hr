

export default function StatisticsCard (props) {
    return (
        <>
            <section className="bg-white w-full  shadow-sm p-5 border border-primary-border rounded-lg ">
              <div className="flex flex-col place-items-center items-center gap-8">
                <h3 className="text-base h-8 text-center">
                  {props.heading}
                </h3>
                <p className="text-3xl">{props.number}</p>
              </div>
            </section>
        </>
    );
}