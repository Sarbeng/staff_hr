import {  MdOutlineDelete, MdOutlineEdit, MdOutlineVisibility } from "react-icons/md";
import LeaveModal from "./LeaveModal";
import { useState } from "react";

export default function LeaveRecords () {
    const [showModal, setShowModal] = useState(false);

    const handleModal = (event:any) => {
      event.preventDefault()
      event.currentTarget.disabled = true;
      setShowModal(!showModal)
  }
  const leaveRecords = [
    {
        id:1,
        heading:"ANNUAL LEAVE",
        status:"Head Pending",
        startDate: "Wed, Mar 15, 2023",
        endDate: "Fri Mar 17, 2023",
        resumptionDate: "Mon Mar 20, 2023",
        daysApplied:10,
        annualLeaveDays:45,
        approval: false
    },
    {
        id:1,
        heading:"ANNUAL LEAVE",
        status:"Head Approved",
        startDate: "Wed, Mar 17, 2023",
        endDate: "Fri Mar 21, 2023",
        resumptionDate: "Mon Mar 31, 2023",
        daysApplied:30,
        annualLeaveDays:45,
        approval: true
    }
]
    return (
        <div className="flex flex-col py-8 ">
            <h3 className="text-lg">Leave Records</h3>


            <div className="py-4">
            {leaveRecords.map((leaveList)=>{
                return (
                    <div className="mb-4 overflow-scroll">
                <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
                  <div className="flex flex-col max-w-xs w-56 gap-4">
                    <h4 className="text-xs uppercase font-semibold">
                      {leaveList.heading}
                    </h4>
                    <p className="truncate ... bg-primary-surface w-fit py-1 px-3 rounded-full text-sm">Status: {leaveList.status}</p>
                    <p className="text-sm" ><span className="text-green-600">{leaveList.endDate}</span> - <span className="text-red-600">{leaveList.endDate}</span></p>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex flex-col max-w-xs w-fit gap-4">
                    <h4 className="text-base capitalize ">
                     Resumption: {leaveList.resumptionDate}
                    </h4>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex flex-col max-w-xs w-fit gap-4 justify-center items-center">
                    
                    <p className="truncate ...">
                      
                      <progress
                        className="w-28 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-main [&::-moz-progress-bar]:bg-primary-main"
                        value={leaveList.daysApplied / leaveList.annualLeaveDays}
                      />{" "}
                      <span className="capitalize">{leaveList.daysApplied}/{leaveList.annualLeaveDays}  leave days applied</span>
                    </p>
                  </div>
                  <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="flex gap-4 px-8">
                    <button
                      // href={leaveList.viewIcon.link}
                      className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"
                      onClick={handleModal}
                    >
                      <span className="text-2xl"><MdOutlineVisibility/></span>
                      <p className="truncate ... text-xs">
                        View
                      </p>
                    </button>
                    
                    {leaveList.approval ? null : <div className="flex gap-3">
                        <button
                     
                     className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center" 
                     
                   >
                     <span className="text-2xl">
                       <MdOutlineEdit />
                     </span>
                     <p className="truncate ... text-xs">Edit</p>
                   </button>
                   <button
                    
                     className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center" 
                     
                   >
                     <span className="text-2xl text-red-600">
                       <MdOutlineDelete />
                     </span>
                     <p className="truncate ... text-xs">Delete</p>
                   </button>
                    </div> }
                 <LeaveModal showModal={showModal} handleModal={handleModal}/>
                  </div>

                  {/* <!-- Pin to top right corner --> */}
                </div>
              </div>
                )
            })}
            </div>
        </div>
    )
}