import {  MdOutlineBubbleChart } from "react-icons/md";
import ApplyButton from "../../components/ApplyButton";
//import {useNavigate} from "react-router-dom"

export default function PromotionStatistics () {
  //const navigate = useNavigate();
    const statistics = [
        {
          id: 1,
          heading: "Promotion Requests",
          number: 3,
        },
      ];
      
    return (
        <div>
             <div className="flex gap-8 items-center justify-start overflow-scroll">
      <div className="py-8 flex gap-4 md:gap-8 ">
        {statistics.map((statistics: any) => {
          return (
            <div className="bg-white shadow-sm p-5 border border-primary-border rounded-lg w-56">
              <div className="flex flex-col place-items-center items-center gap-8">
                <h3 className="text-base h-14 text-center">
                  {statistics.heading}
                </h3>
                <p className="text-3xl">{statistics.number}</p>
              </div>
            </div>
          );
        })}
      </div>
      <ApplyButton To="/dashboard/promotionPage1" Icon={<MdOutlineBubbleChart/>} heading="Apply for Promotion"/>
    </div>
        </div>
    )
}