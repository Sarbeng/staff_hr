import HodPromotionList from "./components/promotionsAwaiting";
import HodPromotionsDone from "./components/promotionsDone";

export default function HodPromotion () {
    return (
        <>
            <HodPromotionList/>
            <HodPromotionsDone/>
        </>
    );
}