import {MdOutlineDelete, MdOutlineEdit, MdOutlineVisibility} from "react-icons/md"
export default function RenewalList ({renewal}) {
    return (
        <>
        <div className="mb-4 overflow-scroll">
        <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-full justify-between rounded-lg border items-center">
            <div className="flex flex-col max-w-xs w-52 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Staff Details
                </h4>
                <div className="flex gap-4 justify-center items-center">
                <img className="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/13221803/pexels-photo-13221803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
               <div>
               <p className="truncate... w-fit py-1 text-sm">{renewal.staff_name}</p>
                <p className="text-sm" ><span className="text-slate-400">{renewal.staff_number}</span></p>
               </div>
                </div>

            </div>
            
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs h-full w-52 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                    Position Details
                </h4>
                <p className="truncate ... w-fit py-1 text-sm"><span className="text-slate-400">Applied: </span>{renewal.position_applied}</p>
                <p className="text-sm" ><span className="text-slate-400">Date Applied: </span>{renewal.date_applied}</p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs h-full w-52 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                    Additional Details
                </h4>
                <p className="truncate ...  py-1 text-sm"><span className="text-slate-400">Assessor: </span>{renewal.assessor}</p>
                <p className="truncate ... text-sm bg-red-100 p-1 w-fit px-2 rounded-full text-red-800 capitalize" ><span>Status: </span>{renewal.status}</p>
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