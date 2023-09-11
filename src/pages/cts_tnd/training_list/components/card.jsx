
import {MdOutlineVisibility,MdOutlineEdit,MdOutlineDelete} from "react-icons/md"
export default function TrainingListCard({training}) {
    return (
        <>
        
        <div className="mb-4 overflow-scroll">
        <div className="flex gap-5 h-28 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
        <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Staff Id
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{training.staff_id}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Name
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{training.staff_name}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Program/Activity
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{training.program_or_activity}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Start Date
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{training.start_date}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                End Date	
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{training.end_date}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Sponsor
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{training.sponsor}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Remarks
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{training.remarks}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Status
                </h4>
                <p className="truncate... w-fit py-1 text-xs border px-2 border-primary-main rounded">{training. status}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                Submission Date
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{training.submission_date}</p>
               
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