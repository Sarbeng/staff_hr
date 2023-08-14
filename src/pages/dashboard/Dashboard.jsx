import DashboardStatistics from "./components/dashboard_statistics";
import RecentPromotions from "./components/recent_promotions";

export default function Dashboard () {
    return (
        <>
            <DashboardStatistics/>
            <section className="mt-10">
                <RecentPromotions/>
            </section>
        </>
    );
}