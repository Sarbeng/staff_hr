import tndApplicants from "../../../data/tndApplications";
import Search from "./components/search";

export default function TnDApplications () {
    return (
        <>
            <Search labelName={"Search using name/staff number"} details={tndApplicants} />
        </>
    );
}