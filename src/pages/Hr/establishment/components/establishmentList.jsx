
import {MdOutlineVisibility,MdOutlineEdit,MdOutlineDelete} from "react-icons/md";
//import positionDetails from "../../../../data/positionDetails";
export default function EstablishmentList ({establishment}) {
    // so what i need to do here is to take the search values from the search input
    // check if those input values exist in the list and display them.

    return <>
           
                <div className=" overflow-scroll mb-4 mt-4">
        <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Staff Details
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{position.name_of_head}</p>
                <p className="text-sm" ><span className="text-slate-400">{position.position}</span></p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-40 gap-4  h-full">
                <h4 className="text-xs uppercase font-semibold h-4">
                  Department
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{position.name_of_dept}</p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs h-full w-48 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                    Position Details
                </h4>
                <p className="truncate ... w-fit py-1 text-sm"><span className="text-slate-400">Started: </span>{position.date_started}</p>
                <p className="text-sm" ><span className="text-slate-400">Ended: </span>{position.date_ended}</p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col w-fit max-w-xs h-full w-48 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                    Days to End of Tenure
                </h4>
                <p className="text-sm bg-primary-surface p-1 w-16 h-16 justify-center items-center flex px-2 rounded-full text-primary-main text-2xl" ><span> </span>{position.days_to_end_of_tenure}</p>
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

                        className="flex flex-col text-red-800  max-w-xs w-full gap-3  items-center justify-center"

                    >
                        <span className="text-2xl">
                            <MdOutlineEdit />
                        </span>
                        <p className="truncate ... text-xs">Edit</p>
                    </button>
                    
                </div>

            </div>

            {/* <!-- Pin to top right corner --> */}
        </div>
    </div>
           
    </>
}