import { MdOutlineAssessment } from "react-icons/md";
import ApplicationCard from "../../../components/ApplicationCard";
import promotionDetails from "../../../data/initialDetails";
import Search from "../promotion_list/components/search";

export default function ContractRenewalList () {
    return (
        <section className="flex flex-col gap-8">

            
            <ApplicationCard to={""} heading={"Add Assessor"} icon={<MdOutlineAssessment/>}/>
            <Search labelName={"Search through contract renenewal using staff name/staff number"} details={promotionDetails}/>
        </section>
    );
}