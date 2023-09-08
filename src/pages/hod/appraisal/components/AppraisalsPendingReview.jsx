
import {  MdOutlineApproval, MdOutlineVisibility } from "react-icons/md";
import {useNavigate} from "react-router-dom"

export default function AppraisalsPendingReview () {
  const navigate = useNavigate();
  const handleAppraisal = () => {
    navigate('/HODappraisalPage1')
  }
    return (
        <section>
        <h3 className="text-lg">Pending Appraisals for Review</h3>


        <div className="mt-4">
       
                <div className=" overflow-scroll">
            <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
              <div className="flex flex-col max-w-xs w-56 gap-4">
                <h4 className="text-xs uppercase font-semibold">
               Staff Name
                </h4>
                <p className="truncate ... bg-primary-surface w-fit py-1 px-3 rounded-full text-sm">Status: Form not Complete </p>
                <p className="text-sm" ><span className="text-slate-400">Wed, Mar 15, 2023</span></p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex flex-col max-w-xs w-56 gap-4">
                <h4 className="text-xs uppercase font-semibold">
               Apraisal Status
                </h4>
                <p className="truncate ... bg-primary-surface w-fit py-1 px-3 rounded-full text-sm">Status: Form not Complete </p>
                <p className="text-sm" ><span className="text-slate-400">Wed, Mar 15, 2023</span></p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              
              <div className="flex flex-col max-w-xs w-56 gap-4 justify-center items-center">
                
                <p className="flex bg-red-50 text-red-600 h-14 w-14 justify-center items-center rounded-full text-xl ">70</p>
                <p className="truncate ...">
                  
                  
                  
                  <span className="capitalize text-sm"> % Appraisal Completion</span>
                </p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex gap-4 px-8">
                <button
                  // href={leaveList.viewIcon.link}
                  className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"
                  
                >
                  <span className="text-2xl"><MdOutlineVisibility/></span>
                  <p className="truncate ... text-xs">
                    View
                  </p>
                </button>
                
                 <div className="flex gap-3">
                    
               <button
                
                 className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center" 
                 onClick={handleAppraisal}
                 
               >
                 <span className="text-2xl">
                   <MdOutlineApproval />
                 </span>
                 <p className="truncate ... text-xs">Appraise</p>
               </button>
                </div> 
            
              </div>

              {/* <!-- Pin to top right corner --> */}
            </div>
          </div>
          
    
      
    </div>
        </section>
    )
}