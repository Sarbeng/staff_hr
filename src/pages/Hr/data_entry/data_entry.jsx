
import { BsSend } from "react-icons/bs"; 
import ApplicationCard from "../../../components/ApplicationCard";
import {  MdOutlineLibraryBooks, MdOutlineMenuBook, MdOutlineNewspaper, MdOutlinePages, MdOutlinePeople,  MdOutlineReport, MdOutlineSafetyDivider, MdOutlineStackedBarChart, MdOutlineStackedLineChart, MdOutlineWorkOff, MdOutlineWorkOutline, MdOutlineWorkspaces } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa"
export default function DataEntry() {
    const cardCollection = [
        {
            id: 1,
            heading: "Staff",
            to: "/dashboard/data_entry/staff",
            icon: <FaPeopleArrows/>,
        },
        {
            id: 2,
            heading: "Leave",
            to: "/dashboard/data_entry/leave",
            icon: <MdOutlineWorkOff />,
        },
        {
            id: 3,
            heading: "Elevation",
            to: "/dashboard/data_entry/elevation",
            icon: <MdOutlineStackedBarChart />,
        },
        {
            id: 4,
            heading: "Transfer",
            to: "/dashboard/data_entry/transfer",
            icon: <BsSend />,
        }, {
            id: 5,
            heading: "Study Leave",
            to: "/dashboard/data_entry/study_leave",
            icon: <MdOutlineLibraryBooks />,
        }, {
            id: 6,
            heading: "Nss",
            to: "/dashboard/data_entry/nss",
            icon: <MdOutlinePeople />,
        }, {
            id: 7,
            heading: "Workspace",
            to: "/dashboard/data_entry/workspace",
            icon: <MdOutlineWorkspaces />,
        },
        {
            id: 8,
            heading: "Disciplinary",
            to: "/dashboard/data_entry/disciplinary",
            icon: <MdOutlineSafetyDivider />,
        },
        {
            id: 9,
            heading: "Circular",
            to: "/dashboard/data_entry/circular",
            icon: <MdOutlineNewspaper />,
        }, {
            id: 10,
            heading: "Papers",
            to: "/dashboard/data_entry/papers",
            icon: <MdOutlinePages />,
        },  {
            id: 11,
            heading: "Documents",
            to: "/dashboard/data_entry/documents",
            icon: <MdOutlineMenuBook />,
        },
        {
            id: 12,
            heading: "Promotions",
            to: "/dashboard/data_entry/promotions",
            icon: <MdOutlineStackedLineChart />,
        },
        {
            id: 13,
            heading: "Reports",
            to: "/dashboard/data_entry/reports",
            icon: <MdOutlineReport />,
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