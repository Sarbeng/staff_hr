import { MdOutlineWorkHistory } from "react-icons/md";
import LeaveModal from "./LeaveModal";
import {useState} from "react"

export default function LeaveApplications () {
    const [showModal, setShowModal] = useState(false);

    const handleModal = (event: any) => {
      event.preventDefault();
      //event.currentTarget.disabled = true;
      setShowModal(!showModal);
    };

    return (
        <div>
            <button className="mt-4 bg-primary-main text-white shadow-sm p-8 border border-primary-border rounded-lg w-56" onClick={handleModal}>
            <div className="flex flex-col place-items-center items-center gap-8">
              <span className="text-5xl">  <MdOutlineWorkHistory/></span>
              <h3 className="text-base  text-center">Apply Leave</h3>
            </div>
          </button>
          <LeaveModal showModal={showModal} handleModal={handleModal}/>
        </div>
    )
}