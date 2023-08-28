export default function LeaveStatistics() {
  const statistics = [
    {
      id: 1,
      heading: "Annual Leave Days",
      number: 85,
    },
    {
      id: 2,
      heading: "Outstanding Balance",
      number: 51,
    },
    {
      id: 3,
      heading: "Entitled Leave Days",
      number: 40,
    },
    {
      id: 4,
      heading: "Leave Deducation",
      number: 6,
    },
  ];

  return (
    <div className="py-8 flex gap-4 md:gap-8 overflow-scroll w-full">
      {statistics.map((statistics: any) => {
        return (
          <div className="bg-white shadow-sm p-8 border border-primary-border rounded-lg w-56">
            <div className="flex flex-col place-items-center items-center gap-8">
              <h3 className="text-base h-14 text-center">{statistics.heading}</h3>
              <p className="text-3xl">{statistics.number}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
