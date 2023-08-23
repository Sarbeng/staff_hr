
import {MdOutlineVisibility,MdOutlineEdit,MdOutlineDelete} from "react-icons/md";

export default function EstablishmentListCard ({establishment}) {
    return (
        <div className="mb-4 overflow-scroll">
        <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Staff Details
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{establishment.staff_name}</p>
                <p className="text-sm" ><span className="text-slate-400">{establishment.staff_number}</span></p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-40 gap-4  h-full">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Job Details
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{establishment.job_title}</p>
                <p className="text-sm" ><span className="text-slate-400 uppercase">{establishment.unit}</span></p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs h-full w-48 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                    Date Appointed
                </h4>
                <p className="truncate ... w-fit py-1 text-sm"><span className="text-slate-400">Date: </span>{establishment.date_appointed}</p>
                {/* <p className="text-sm bg-red-100 p-1 w-fit px-2 rounded-full text-red-800 capitalize" ><span>Status: </span>{establishment.status}</p> */}
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
    );
}