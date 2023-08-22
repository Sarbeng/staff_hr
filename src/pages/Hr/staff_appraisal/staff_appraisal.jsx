import Search from "./components/search";
import appraisalDetails from "../../../data/appraisalDetails"
import AppraisalSearch from "./components/search";

export default function StaffAppraisal () {
    return (
        <>
            <AppraisalSearch labelName={"Search using name/Staff number"} details={appraisalDetails}/>
        </>
    );
}