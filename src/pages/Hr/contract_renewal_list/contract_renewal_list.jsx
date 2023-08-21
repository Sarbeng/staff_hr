import { MdOutlineAssessment } from "react-icons/md";
import ApplicationCard from "../../../components/ApplicationCard";
import promotionDetails from "../../../data/initialDetails";
import Search from "../promotion_list/components/search";
import AddAssessorModal from "./components/add_assessor_modal";
import { useState } from "react";

export default function ContractRenewalList () {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal)
    }
    return (
        <section className="flex flex-col gap-8">

            
            <ApplicationCard heading={"Add Assessor"} icon={<MdOutlineAssessment/>} onClick={handleModal}/>
            <AddAssessorModal showModal={showModal} handleModal={handleModal}/>
            <Search labelName={"Search through contract renenewal using staff name/staff number"} details={promotionDetails}/>
        </section>
    );
}