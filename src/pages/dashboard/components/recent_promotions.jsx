import { MdOutlineVisibility, MdOutlineDelete, MdOutlineEdit } from "react-icons/md"
export default function RecentPromotions() {
    const date = new Date();
    console.log(date.getDate());
    const promotionDetails = [
        {
            staff_name:"Richmond Kwabenena Nketia Gelsu",
            staff_number:"13455",
            staff_department:"Management Information Systems",
            current_position:"ICT Assistant",
            applied_position:"Senior ICT Assistant",
            submission_date:"21st September 2023",
            status:"with HOD",

        },
        {
            staff_name:"Richmond Kwabenena Nketia Gelsu",
            staff_number:"13455",
            staff_department:"Management Information Systems",
            current_position:"ICT Assistant",
            applied_position:"Senior ICT Assistant",
            submission_date:"21st September 2023",
            status:"with HOD",

        }, {
            staff_name:"Richmond Kwabenena Nketia Gelsu",
            staff_number:"13455",
            staff_department:"Management Information Systems",
            current_position:"ICT Assistant",
            applied_position:"Senior ICT Assistant",
            submission_date:"21st September 2023",
            status:"with HOD",

        }, {
            staff_name:"Richmond Kwabenena Nketia Gelsu",
            staff_number:"13455",
            staff_department:"Management Information Systems",
            current_position:"ICT Assistant",
            applied_position:"Senior ICT Assistant",
            submission_date:"21st September 2023",
            status:"with HOD",

        }
    ]
    return (
        <>
            <h3 className="text-xl py-4">Recent Promotions</h3>
           {
            promotionDetails.map((promotion) => {
                return <>
                <div className="mb-4 overflow-scroll">
                <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
                    <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                        <h4 className="text-xs uppercase font-semibold h-4">
                            Staff Details
                        </h4>
                        <p className="truncate... w-fit py-1 text-sm">{promotion.staff_name}</p>
                        <p className="text-sm" ><span className="text-slate-400">{promotion.staff_number}</span></p>
                    </div>
                    <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                    <div className="flex flex-col max-w-xs w-40 gap-4  h-full">
                        <h4 className="text-xs uppercase font-semibold h-4">
                            Department
                        </h4>
                        <p className="truncate... w-fit py-1 text-sm">{promotion.staff_department}</p>
                    </div>
                    <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                    <div className="flex flex-col max-w-xs h-full w-48 gap-4">
                        <h4 className="text-xs uppercase font-semibold">
                            Position Details
                        </h4>
                        <p className="truncate ... w-fit py-1 text-sm"><span className="text-slate-400">Current: </span>{promotion.current_position}</p>
                        <p className="text-sm" ><span className="text-slate-400">Applied: </span>{promotion.applied_position}</p>
                    </div>
                    <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                    <div className="flex flex-col max-w-xs h-full w-48 gap-4">
                        <h4 className="text-xs uppercase font-semibold">
                            Submission Details
                        </h4>
                        <p className="truncate ... w-fit py-1 text-sm"><span className="text-slate-400">Date: </span>21st September 2023</p>
                        <p className="text-sm bg-red-100 p-1 w-fit px-2 rounded-full text-red-800" ><span>Status: </span>With HOD</p>
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
            })
           }
           
        </>
    );
}