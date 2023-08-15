import promotionDetails from "../../../data/initialDetails";
import Search from "./components/search";

export default function PromotionList () {
    return (
        <>
            <Search details={promotionDetails}/>
        </>
    );
}