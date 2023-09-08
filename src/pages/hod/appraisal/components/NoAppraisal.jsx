import { MdOutlineInfo} from "react-icons/md";
export default function NoAppraisal () {
    return (
        <div className="flex gap-3 items-center bg-primary-surface w-full overflow-auto px-4 py-5 rounded-lg my-2">
                    <span className="text-2xl"><MdOutlineInfo/></span>
                    <p className="capitalize">You have no previous appraisals. Please fil a new appraisal form</p>
                </div>
    )
}