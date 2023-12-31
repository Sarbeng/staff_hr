import { MdOutlineAddShoppingCart } from "react-icons/md";
import ApplyButton from "../../../../components/ApplicationCard";

export default function ProcurementStatistics() {
  const statistics = [
    {
      id: 1,
      heading: "Item Requests for current year",
      number: 85,
    },
  ];

  return (
    <div className="flex gap-8 items-center justify-start overflow-scroll">
      <div className="py-8 flex gap-4 md:gap-8 ">
        {statistics.map((statistics) => {
          return (
            <div key={""} className="bg-white shadow-sm p-5 border border-primary-border rounded-lg w-56">
              <div className="flex flex-col place-items-center items-center gap-8">
                <h3 className="text-base capitalize h-14 text-center">
                  {statistics.heading}
                </h3>
                <p className="text-3xl">{statistics.number}</p>
              </div>
            </div>
          );
        })}
      </div>
      <ApplyButton  to="/dashboard/procurementRequest" icon={<MdOutlineAddShoppingCart/>} heading="Procure Items"/>
    </div>
  );
}
