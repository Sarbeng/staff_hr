import ApplicationCard from "../../../components/ApplicationCard";
import { MdOutlinePerson4 } from "react-icons/md"
export default function DataEntry() {
    const cardCollection = [
        {
            id: 1,
            heading: "Staff",
            to: "/dashboard/data_entry/staff",
            icon: <MdOutlinePerson4 />,
        },
        {
            id: 2,
            heading: "Leave",
            to: "/dashboard/data_entry/leave",
            icon: <MdOutlinePerson4 />,
        },
        {
            id: 3,
            heading: "Elevation",
            to: "/dashboard/data_entry/elevation",
            icon: <MdOutlinePerson4 />,
        },
        {
            id: 4,
            heading: "Transfer",
            to: "/dashboard/data_entry/transfer",
            icon: <MdOutlinePerson4 />,
        }, {
            id: 5,
            heading: "Study Leave",
            to: "/dashboard/data_entry/study_leave",
            icon: <MdOutlinePerson4 />,
        }, {
            id: 6,
            heading: "Nss",
            to: "/dashboard/data_entry/nss",
            icon: <MdOutlinePerson4 />,
        }, {
            id: 7,
            heading: "Workspace",
            to: "/dashboard/data_entry/workspace",
            icon: <MdOutlinePerson4 />,
        },
        {
            id: 8,
            heading: "Staff",
            to: "/dashboard/data_entry/staff",
            icon: <MdOutlinePerson4 />,
        },
        {
            id: 9,
            heading: "Disciplinary",
            to: "/dashboard/data_entry/disciplinary",
            icon: <MdOutlinePerson4 />,
        },
        {
            id: 10,
            heading: "Circular",
            to: "/dashboard/data_entry/circular",
            icon: <MdOutlinePerson4 />,
        }, {
            id: 11,
            heading: "Papers",
            to: "/dashboard/data_entry/papers",
            icon: <MdOutlinePerson4 />,
        },  {
            id: 12,
            heading: "Documents",
            to: "/dashboard/data_entry/documents",
            icon: <MdOutlinePerson4 />,
        },
        {
            id: 13,
            heading: "Promotions",
            to: "/dashboard/data_entry/promotions",
            icon: <MdOutlinePerson4 />,
        },
        {
            id: 14,
            heading: "Reports",
            to: "/dashboard/data_entry/reports",
            icon: <MdOutlinePerson4 />,
        }
    ]
    return (
        <>
            <section className="flex flex-wrap gap-8">
                {cardCollection.map((cards) => {
                    return (
                        <ApplicationCard key={cards.id} to={cards.to} heading={cards.heading} icon={cards.icon} />
                    )
                })}
            </section>
        </>
    );
}