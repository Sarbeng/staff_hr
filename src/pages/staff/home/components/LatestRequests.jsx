

import LatestLeaveRequests from "./LatestRequestsComponents/LatestLeaveRequests";

export default function LatestRequests() {


  

  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-scroll  md:h-fit md:max-w-fit">
      <div className="md:flex">
        <div className="md:shrink-0"></div>
        <div className="p-8">
          <div className="capitalize tracking-wide text-xl  ">
            Latest Requests
          </div>
          <hr className=" border-primary-main h-4" />

          
          {console.log(<LatestLeaveRequests/>)}
           <LatestLeaveRequests/>
         
             
        </div>
      </div>
    </div>
  );
}
