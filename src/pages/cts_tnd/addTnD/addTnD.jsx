import promotionDetails from "../../../data/initialDetails";
import tndAddData from "../../../data/tndAddData";
import Search from "./components/search";

export default function AddTnD () {
    return (
        <>
             <Search labelName={"Search using name/staff number"} details={tndAddData} />
        </>
    );
}