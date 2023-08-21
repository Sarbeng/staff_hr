import promotionDetails from "../../../data/initialDetails";
import Search from "./components/search";

export default function PromotionList () {
    return (
        <>
            <Search labelName={"Search using name/staff number"} details={promotionDetails}/>
        </>
    );
}