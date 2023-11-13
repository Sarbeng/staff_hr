
import {  MdOutlineDelete, MdOutlineEdit, MdOutlineVisibility } from "react-icons/md";
import ViewAppraisal from "./ViewAppraisal";

export default function CurrentAppraisal (props) {
    return (
        <section>
        <h3 className="text-lg">Your Current Appraisals</h3>


        <div className="mt-4">
       
                <div className=" overflow-scroll">
            <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
              <div className="flex flex-col max-w-xs w-56 gap-4">
                <h4 className="text-xs uppercase font-semibold">
               Apraisal Status
                </h4>
                <p className="truncate ... bg-primary-surface w-fit py-1 px-3 rounded-full text-sm">Status: {props.status}</p>
                <p className="text-sm" ><span className="text-slate-400">{props.date}</span></p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex flex-col max-w-xs w-fit gap-4">
                <h4 className="text-base capitalize ">
                 Completion Date: <span className="text-slate-400">{props.completion_date}</span> 
                </h4>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex flex-col max-w-xs w-56 gap-4 justify-center items-center">
                
                <p className={`flex ${props.percentage_completion == 100 ? "bg-green-50 text-green-500": props.percentage_completion == 70 ? "bg-orange-50 text-orange-600" : props.percentage_completion == 40} h-14 w-14 justify-center items-center rounded-full text-xl `}>{props?.percentage_completion}</p>
                <p className="truncate ...">
                  
                  
                  
                  <span className="capitalize"> % Form Completion</span>
                </p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex gap-4 px-8">
                <button onClick={props.view}
                  // href={leaveList.viewIcon.link}
                  className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"
                  
                >
                  <span className="text-2xl"><MdOutlineVisibility/></span>
                  <p className="truncate ... text-xs">
                    View
                  </p>
                </button>
                
                 <div className="flex gap-3">
                    <button onClick={props?.edit}
                 
                 className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center" 
                 
               >
                 <span className="text-2xl">
                   <MdOutlineEdit />
                 </span>
                 <p className="truncate ... text-xs">Edit</p>
               </button>
               <button onClick={props?.delete}
                
                 className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center" 
                 
               >
                 <span className="text-2xl text-red-600">
                   <MdOutlineDelete />
                 </span>
                 <p className="truncate ... text-xs">Delete</p>
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