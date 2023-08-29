import { NavLink } from "react-router-dom";
import {MdOutlineWorkOff} from "react-icons/md";
export default function MainNav (handleToggle) {
    const activeLink = 'rounded-r-full bg-primary-main text-white';
    const normalLink = '';
    const mainLinks = [
        {
          linkName:"Cts & Tnd",
          linkIcon: <MdOutlineWorkOff/>,
          linkTo:"/dashboard/tnd"
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