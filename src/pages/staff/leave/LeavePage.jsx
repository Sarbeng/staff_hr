
import LeaveModal from "./LeaveModal";
import { useState } from "react";
import LeaveStatistics from "./LeaveStatistics";
import LeaveRecords from "./LeaveRecords";
import ApplyButton from "../../components/ApplyButton";
import { MdOutlineWorkHistory } from "react-icons/md";

export default function LeavePage() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (event: any) => {
    event.preventDefault();
    //event.currentTarget.disabled = true;
    setShowModal(!showModal);
  };
  return (
    <>
      <div>
        {/* <section>
          <div className="flex   items-center gap-3 justify-between">
            <h3 className="text-xl">Leave Page</h3>
            <Button
              buttonStyle="bg-primary-main text-white"
              onClick={handleModal}
            >
              Apply for Leave
            </Button>
          </div>
          <LeaveModal showModal={showModal} handleModal={handleModal} />
        </section> */}
        <section className="">
          <LeaveStatistics />
        </section>
        <section>
            <ApplyButton To="/leave" Icon={<MdOutlineWorkHistory/>} heading="Apply Leave" onClick={handleModal}/>
        </section>
        <section>
            <LeaveRecords/>
        </section>
        <LeaveModal showModal={showModal} handleModal={handleModal} />
      </div>
    </>
  );
}
