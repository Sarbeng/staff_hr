import { MdOutlineCheck, MdOutlineVisibility } from "react-icons/md";
import { useEffect, useState } from "react";
import LeaveModal from "../../leave/components/LeaveModal";
import axios from "../../../../api/axios";
import {useAuthUser} from "react-auth-kit";

export default function LatestRequests() {
  const [showModal, setShowModal] = useState(false);
  const [leaveRequests,SetLeaveRequests] = useState([]);
  // assigning our data to a viarable
  const auth = useAuthUser();
  // setting our leave url
  const leave_url = "/leave";
  //getting our auth token
  const token = auth().token;

  const handleModal = (event) => {
    event.preventDefault()
    event.currentTarget.disabled = true;
    setShowModal(!showModal)
}

const getLatestLeave = async () => {
  const response = await axios.get(leave_url,{
    headers:{
      Authorization:`Bearer ${token}`,
      "Accept":"application/json"
    }
    
  })
  .catch((error) => {
    if (error) {
      console.log(error.response.data.message)
    }
  })

  if (response) {
    console.log(response.data)
    SetLeaveRequests(response.data)
    console.log(leaveRequests)
  }
}

useEffect(() => {
  getLatestLeave()
},[])


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
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-scroll  md:h-fit md:max-w-fit">
      <div className="md:flex">
        <div className="md:shrink-0"></div>
        <div className="p-8">
          <div className="capitalize tracking-wide text-xl  ">
            Latest Requests
          </div>
          <hr className=" border-primary-main h-4" />

          
          {leaveRequests && 
            <div className="mb-4" >
                <div className="flex gap-5 h-24 py-5 px-4 shadow-sm bg-white w-fit rounded-lg border">
                  <div className="flex flex-col max-w-xs w-44 gap-4">
                    <h4 className="text-xs uppercase font-semibold">
                      {"Leave"}
                    </h4>
                    <p className="truncate ...">{leaveRequests?.user?.fname} {leaveRequests?.user?.lname}</p>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex flex-col max-w-xs w-44 gap-4">
                    <h4 className="text-xs uppercase font-semibold">
                      {"Applied Days"}
                    </h4>
                    <p className="truncate ...">
                      {" "}
                      <progress
                        className="w-28 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-main [&::-moz-progress-bar]:bg-primary-main"
                        value={leaveRequests?.leave?.approved_days/leaveRequests?.leave?.entitlement}
                      />
                      {` ${leaveRequests.leave?.approved_days}/ ${leaveRequests.leave?.entitlement}`}
                    </p>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex flex-col max-w-xs w-36 gap-4">
                    <h4 className="text-xs uppercase font-semibold">
                      {"Start Date"}
                    </h4>
                    <p className="truncate ...">{leaveRequests.leave?.start_date}</p>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex flex-col max-w-xs w-36 gap-4">
                    <h4 className="text-xs uppercase font-semibold">
                      {"Resumption Date"}
                    </h4>
                    <p className="truncate ...">{leaveRequests.leave?.resume_date}</p>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex gap-4">
                    <button
                      // href={leaverequests.viewIcon.link}
                      className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"
                      onClick={handleModal}
                    >
                      {/* <span className="text-2xl">{leaveRequests.viewIcon.icon}</span> */}
                      <p className="truncate ... text-xs">
                        {/* {leaveRequests.viewIcon.iconText} */}
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
                    <button
                     
                      className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center" 
                      
                    >
                      <span className="text-2xl">
                        <MdOutlineCheck />
                      </span>
                      <p className="truncate ... text-xs">Disapprove</p>
                    </button>
                 <LeaveModal showModal={showModal} handleModal={handleModal}/>
                  </div>

                  {/* <!-- Pin to top right corner --> */}
                </div>
              </div>
          }
             
        </div>
      </div>
    </div>
  );
}
