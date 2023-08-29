import { NavLink } from "react-router-dom";
import {
    MdOutlineDashboard,
    MdOutlineModeEdit,
    MdOutlineSettings,
    MdOutlineList,
    MdOutlineAddChart,
    MdOutlineAppRegistration,
   
    MdOutlineHomeWork,
    MdOutlineChangeHistory,
  } from "react-icons/md";
export default function HrNav ({handleToggle}) {
    const activeLink = 'rounded-r-full bg-primary-main text-white';
    const normalLink = '';
    const hrLinks = [
        {
          linkName:"Hr",
          linkIcon: <MdOutlineDashboard/>,
          linkTo:"/hr/home"
        },
        {
          linkName:"Data Entry",
          linkIcon: <MdOutlineModeEdit/>,
          linkTo:"/hr/data_entry"
        },
        {
          linkName:"Data Setup",
          linkIcon: <MdOutlineSettings/>,
          linkTo:"/hr/data_setup"
        },
        {
          linkName:"Promotion List",
          linkIcon: <MdOutlineList/>,
          linkTo:"/hr/promotion_list"
        },
        {
          linkName:"Postion Assignment",
          linkIcon: <MdOutlineChangeHistory/>,
          linkTo:"/hr/postion_assignment"
        },
        {
          linkName:"Contract Renewal",
          linkIcon: <MdOutlineAddChart/>,
          linkTo:"/hr/contract_renewal"
        },
        {
          linkName:"Staff Appraisal",
          linkIcon: <MdOutlineAppRegistration/>,
          linkTo:"/hr/staff_appraisal"
        },
        {
          linkName:"Establishment",
          linkIcon: <MdOutlineHomeWork/>,
          linkTo:"/hr/establishment"
        },
        
      ]
   return (
    <>
    {
        hrLinks.map((navLink)=>{
        return (
          <NavLink
      to={navLink.linkTo}
      key={navLink.linkTo}
      className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }
      onClick={handleToggle}
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