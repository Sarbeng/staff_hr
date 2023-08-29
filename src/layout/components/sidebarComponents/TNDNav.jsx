
import {MdOutlineWorkOff} from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function TNDNav ({handleToggle}) {
    const activeLink = 'rounded-r-full bg-primary-main text-white';
    const normalLink = '';
    const tnDLinks = [
        {
          linkName:"Cts & Tnd",
          linkIcon: <MdOutlineWorkOff/>,
          linkTo:"/tnd/home"
        },
        {
            linkName:"Add T&D data",
            linkIcon: <MdOutlineWorkOff/>,
            linkTo:"/dashboard/tnd"
          },
          {
            linkName:"Training List",
            linkIcon: <MdOutlineWorkOff/>,
            linkTo:"/dashboard/tnd"
          },
          {
            linkName:"T&D Applications",
            linkIcon: <MdOutlineWorkOff/>,
            linkTo:"/dashboard/tnd"
          },
      ]
    return <>
        {
            tnDLinks.map((navLink)=>{
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
}