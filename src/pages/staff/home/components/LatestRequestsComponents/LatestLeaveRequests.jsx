import {  MdOutlineDeleteForever, MdOutlineEdit} from "react-icons/md";
import {useAuthUser} from "react-auth-kit";
import { useEffect, useState } from "react";
import axios from "../../../../../api/axios";


export default function  LatestLeaveRequests () {
    
    const [leaveRequests,SetLeaveRequests] = useState([]);
    // assigning our data to a viarable
    const auth = useAuthUser();
    // setting our leave url
    const leave_url = "/leave";
    //getting our auth token
    const token = auth().token;
  
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
        }
      }
      
      useEffect(() => {
        getLatestLeave()
      },[])
  
    return (
       <>
        
       {
        leaveRequests && 
        <div className="mb-4" >
        {
            leaveRequests.map((leave) => {
                {console.log(leave)}
               return (
                <div className="flex gap-5 h-24 py-5 px-4 shadow-sm bg-white w-fit rounded-lg border" key={leave.leave_id}>
          <div className="flex flex-col max-w-xs w-44 gap-4">
            <h4 className="text-xs uppercase font-semibold">
              {"Leave"}
            </h4>
            <p className="truncate ... text-sm">{leave.fname} {leave.mname} {leave.lname} </p>
          </div>
          <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
          <div className="flex flex-col max-w-xs w-32 gap-4">
            <h4 className="text-xs uppercase font-semibold">
              {"Applied Days"}
            </h4>
            <p className="truncate ... text-sm">
              {" "}
              <progress
                className="w-20 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-main [&::-moz-progress-bar]:bg-primary-main"
                value={leave.approved_days/leave.entitlement}
              />
              {` ${leave.approved_days}/ ${leave.entitlement}`}
            </p>
          </div>
          <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
          <div className="flex flex-col max-w-xs w-32 gap-4">
            <h4 className="text-xs uppercase font-semibold">
              {"Start Date"}
            </h4>
            <p className="truncate ... text-sm">{leave.start}</p>
          </div>
          <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
          <div className="flex flex-col max-w-xs w-32 gap-4">
            <h4 className="text-xs uppercase font-semibold">
              {"Resumption Date"}
            </h4>
            <p className="truncate ... text-sm">{leave.resume}</p>
          </div>
          <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
          <div className="flex flex-col max-w-xs w-32 gap-4">
            <h4 className="text-xs uppercase font-semibold">
              {"Status"}
            </h4>
            <p className="truncate ... text-xs bg-primary-surface py-2 flex justify-center items-center rounded-full"><span className="p-4 font-semibold">{leave.status}</span></p>
          </div>
          <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
          <div className="flex gap-4">
            <button
              // href={leaverequests.viewIcon.link}
              className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"
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
                <MdOutlineEdit />
              </span>
              <p className="truncate ... text-xs">Edit</p>
            </button>
            <button
             
              className="flex flex-col  max-w-xs w-full gap-3  text-red-700  items-center justify-center" 
              
            >
              <span className="text-2xl">
                <MdOutlineDeleteForever />
              </span>
              <p className="truncate ... text-xs">Delete</p>
            </button>
          </div>

          {/* <!-- Pin to top right corner --> */}
        </div>
               )
            })
        }
      </div>
       }

        
       </>
    );
}