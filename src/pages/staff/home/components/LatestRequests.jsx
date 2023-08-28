import { MdOutlineCheck, MdOutlineVisibility } from "react-icons/md";
import { useState } from "react";
import LeaveModal from "../Leave/LeaveModal";

export default function LatestRequests() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (event:any) => {
    event.preventDefault()
    event.currentTarget.disabled = true;
    setShowModal(!showModal)
}

  const latestRequests = [
    {
      heading1: " Annual Leave",
      name: "Ceceilia Ntow Ewusie",
      heading2: "Days Applied",
      progressValue: 40 / 50,
      progressNumber: "40/50",
      heading3: "Resumption Date",
      text3: "Mon Mar 20, 2023",
      viewIcon: {
        icon: <MdOutlineVisibility />,
        iconText: "View",
        link: "",
      },
    },
    {
      heading1: " Promotion",
      name: "Ceceilia Ntow Ewusie",
      heading2: "Progress",
      progressValue: 40/100,
      progressNumber: "40"+"%",
      heading3: "Position Applied",
      text3: "System Analyst",
      viewIcon: {
        icon: <MdOutlineVisibility />,
        iconText: "View",
        link: "",
      },
    },
  ];

  

  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-scroll  md:h-80 md:max-w-[840px]">
      <div className="md:flex">
        <div className="md:shrink-0"></div>
        <div className="p-8">
          <div className="capitalize tracking-wide text-xl  ">
            Latest Requests
          </div>
          <hr className=" border-primary-main h-4" />

          {latestRequests.map((latest) => {
            return (
              <div className="mb-4" key={latest.heading1}>
                <div className="flex gap-5 h-24 py-5 px-4 shadow-sm bg-white w-[780px] rounded-lg border">
                  <div className="flex flex-col max-w-xs w-44 gap-4">
                    <h4 className="text-xs uppercase font-semibold">
                      {latest.heading1}
                    </h4>
                    <p className="truncate ...">{latest.name}</p>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex flex-col max-w-xs w-44 gap-4">
                    <h4 className="text-xs uppercase font-semibold">
                      {latest.heading2}
                    </h4>
                    <p className="truncate ...">
                      {" "}
                      <progress
                        className="w-28 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-main [&::-moz-progress-bar]:bg-primary-main"
                        value={latest.progressValue}
                      />{" "}
                      {latest.progressNumber}
                    </p>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex flex-col max-w-xs w-44 gap-4">
                    <h4 className="text-xs uppercase font-semibold">
                      {latest.heading3}
                    </h4>
                    <p className="truncate ...">{latest.text3}</p>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex gap-4">
                    <button
                      // href={latest.viewIcon.link}
                      className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"
                      onClick={handleModal}
                    >
                      <span className="text-2xl">{latest.viewIcon.icon}</span>
                      <p className="truncate ... text-xs">
                        {latest.viewIcon.iconText}
                      </p>
                    </button>
                    <button
                     
                      className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center" 
                      
                    >
                      <span className="text-2xl">
                        <MdOutlineCheck />
                      </span>
                      <p className="truncate ... text-xs">Approve</p>
                    </button>
                 <LeaveModal showModal={showModal} handleModal={handleModal}/>
                  </div>

                  {/* <!-- Pin to top right corner --> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
