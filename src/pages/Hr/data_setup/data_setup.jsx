import { BsCalendar, BsCalendarDate, BsFileEarmarkImage, BsFillImageFill, BsSend } from "react-icons/bs"; 
import { GiBookshelf, GiMailbox, GiMapleLeaf, GiPayMoney } from "react-icons/gi";
import { LiaSitemapSolid } from "react-icons/lia"
import ApplicationCard from "../../../components/ApplicationCard";
import {  MdOutlineImage, MdOutlineLibraryBooks, MdOutlineLocationCity, MdOutlineMenuBook, MdOutlineNewspaper, MdOutlinePages, MdOutlinePeople,  MdOutlineReport, MdOutlineSafetyDivider, MdOutlineStackedBarChart, MdOutlineStackedLineChart, MdOutlineWorkHistory, MdOutlineWorkOff, MdOutlineWorkOutline, MdOutlineWorkspaces } from "react-icons/md";
import { FaCriticalRole, FaPeopleArrows } from "react-icons/fa"

export default function DataSetup () {
        const cardCollection = [
        {
            id: 1,
            heading: "Grades",
            to: "/dashboard/data_setup/grades",
            icon: <GiPayMoney/>,
        },
        {
            id: 2,
            heading: "Units",
            to: "/dashboard/data_setup/units",
            icon: <LiaSitemapSolid />,
        },
        {
            id: 3,
            heading: "Designations",
            to: "/dashboard/data_setup/designations",
            icon: <MdOutlineStackedBarChart />,
        },
        {
            id: 4,
            heading: "Position",
            to: "/dashboard/data_setup/position",
            icon: <BsSend />,
        }, {
            id: 5,
            heading: "Dob",
            to: "/dashboard/data_setup/dob",
            icon: <BsCalendarDate />,
        }, {
            id: 6,
            heading: "Photos",
            to: "/dashboard/data_setup/photos",
            icon: <BsFileEarmarkImage />,
        }, {
            id: 7,
            heading: "Roles",
            to: "/dashboard/data_setup/roles",
            icon: <FaCriticalRole />,
        },
        {
            id: 8,
            heading: "Education",
            to: "/dashboard/data_setup/education",
            icon: <GiBookshelf/>,
        },
        {
            id: 9,
            heading: "Location",
            to: "/dashboard/data_setup/location",
            icon: <MdOutlineLocationCity />,
        }, {
            id: 10,
            heading: "Logs",
            to: "/dashboard/data_setup/logs",
            icon: <MdOutlineWorkHistory />,
        },  {
            id: 11,
            heading: "Inbox",
            to: "/dashboard/data_setup/inbox",
            icon: <GiMailbox />,
        },
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