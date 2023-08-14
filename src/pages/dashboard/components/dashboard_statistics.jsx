import StatisticsCard from "../../../components/StatisticsCard";

export default function DashboardStatistics () {
    const statisticsData = [
        {heading:"Total Promotion", number:3},
        {heading:"Approved Promotion", number:0},
        {heading:"Disapproved Promotion", number:0},
    ]
    return (
        <>
            <section className="flex md:flex-row flex-col gap-8 justify-between">
                {
                    statisticsData.map((statistics)=>{
                        return <div key={statistics.heading} className="md:w-1/3">
                        <StatisticsCard heading={statistics.heading} number={statistics.number}/>
                        </div>
                    })
                }
            </section>
        </>
    );
}