import { NavLink } from "react-router-dom";
import {MdOutlineWorkOff,MdOutlineDashboard,MdOutlinePerson,MdOutlineBallot,MdOutlineShoppingBag,MdOutlineStackedLineChart,} from "react-icons/md";
export default function MainNav ({handleToggle, onClick}) {
    const activeLink = 'rounded-r-full bg-primary-main text-white';
    const normalLink = '';
    const mainLinks = [
        {
            linkName:"Dashboard",
            linkIcon: <MdOutlineDashboard/>,
            linkTo:"/dashboard/home"
          },
          {
            linkName:"Personal Details",
            linkIcon: <MdOutlinePerson/>,
            linkTo:"/dashboard/personalDetails"
          },
          {
            linkName:"Leave",
            linkIcon: <MdOutlineWorkOff/>,
            linkTo:"/dashboard/leave"
          },
          {
            linkName:"Appraisal",
            linkIcon: <MdOutlineBallot/>,
            linkTo:"/dashboard/appraisal"
          },
          {
            linkName:"Promotion",
            linkIcon: <MdOutlineStackedLineChart/>,
            linkTo:"/dashboard/promotion"
          },
      ]
    return(
        <>
        {
            mainLinks.map((navLink)=>{
            return (
              <NavLink
          to={navLink.linkTo}
          key={navLink.linkTo}
          className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }
          onClick={onClick}
          >
            <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl">{navLink.linkIcon}</span>
          {navLink.linkName}</p>
        </NavLink>
            )
          })
        }
    </>
    )
    
}