import Search from "../promotion_list/components/search";
import appraisalDetails from "../../../data/appraisalDetails"

export default function StaffAppraisal () {
    return (
        <>
            <Search labelName={"Search using name/Staff number"} details={appraisalDetails}/>
        </>
    );
}