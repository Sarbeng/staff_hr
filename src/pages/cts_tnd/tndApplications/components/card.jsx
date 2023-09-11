
import {MdOutlineVisibility,MdOutlineEdit,MdOutlineDelete} from "react-icons/md"
export default function TndApplicantsCard({applicants}) {
    return (
        <>
        
        <div className="mb-4 overflow-scroll">
        <div className="flex gap-5 h-28 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
        <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Staff Id
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.staff_id}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Name
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.staff_name}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Highest Education
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.highest_education}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Intended Program
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.intended_program}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Place To Study	
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.place_to_study}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Duration
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.duration}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Program Type
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.program_type}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Study Mode
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.study_mode}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Status
                </h4>
                <p className="truncate... w-fit py-1 text-xs border px-2 border-primary-main rounded">{applicants. status}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Date to Commence
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.commencement_date}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Date Applied
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{applicants.date_applied}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            
            
          
            <div className="flex gap-4 px-8">
                <button
                    // href={leaveList.viewIcon.link}
                    className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"

                >
                    <span className="text-2xl"><MdOutlineVisibility /></span>
                    <p className="truncate ... text-xs">
                        View
                    </p>
                </button>

                <div className="flex gap-3">
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
                </div>

            </div>

            {/* <!-- Pin to top right corner --> */}
        </div>
    </div>
        </>
    );
}