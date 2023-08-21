import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import {
  MdOutlineDashboard,
  MdOutlineWorkOff,
  MdOutlineLogout,
  MdOutlineModeEdit,
  MdOutlineSettings,
  MdOutlineList,
  MdOutlineAddChart,
  MdOutlineAppRegistration,
 
  MdOutlineHomeWork,
  MdOutlineChangeHistory,
} from "react-icons/md";
import {useSignOut,useAuthUser} from "react-auth-kit";






export default function Sidebar(props) {
    const activeLink = 'rounded-r-full bg-primary-main text-white'
    const normalLink = ''
    const [isExpanded] = useState(false);
   
    //this section is used to check for the role of the user, currently not using it so we'll see
    
     const [testRole, setTestRole] = useState("HR");
    // const auth = useAuthUser();
    // useEffect(()=>{
    //    let role = auth().role;
    //    if (role == "08"){
    //     setTestRole("HR")
    //     console.log(testRole,role)
    //    }
    //    else if (role == "07"){
    //     setTestRole("HR")
    //     console.log(testRole,role)
    //    }
    //    else if (role == "06"){
    //     setTestRole("HR")
    //     console.log(testRole,role)
    //    }
    //    else if (role == "05"){
    //     setTestRole("HR")
    //     console.log(testRole,role)
    //    }
    //    else if (role == "04"){
    //     setTestRole("HR")
    //     console.log(testRole,role)
    //    }
    //    else if (role == "03"){
    //     setTestRole("tnD")
    //     console.log(testRole,role)
    //    }
    //    else if (role == "02"){
    //     setTestRole("tnD")
    //     console.log(testRole,role)
    //    }
    //    else if (role == "01"){
    //     setTestRole("tnD")
    //     console.log(testRole,role)
    //    }
    // },[])
    

    const hrLinks = [
      {
        linkName:"Dashboard",
        linkIcon: <MdOutlineDashboard/>,
        linkTo:"/dashboard/home"
      },
      {
        linkName:"Data Entry",
        linkIcon: <MdOutlineModeEdit/>,
        linkTo:"/dashboard/data_entry"
      },
      {
        linkName:"Data Setup",
        linkIcon: <MdOutlineSettings/>,
        linkTo:"/dashboard/data_setup"
      },
      {
        linkName:"Promotion List",
        linkIcon: <MdOutlineList/>,
        linkTo:"/dashboard/promotion_list"
      },
      {
        linkName:"Postion Assignment",
        linkIcon: <MdOutlineChangeHistory/>,
        linkTo:"/dashboard/postion_assignment"
      },
      {
        linkName:"Contract Renewal",
        linkIcon: <MdOutlineAddChart/>,
        linkTo:"/dashboard/contract_renewal"
      },
      {
        linkName:"Staff Appraisal",
        linkIcon: <MdOutlineAppRegistration/>,
        linkTo:"/dashboard/staff_appraisal"
      },
      {
        linkName:"Establishment",
        linkIcon: <MdOutlineHomeWork/>,
        linkTo:"/dashboard/establishment"
      },
      
    ]

    const tnDLinks = [
      {
        linkName:"Cts & Tnd",
        linkIcon: <MdOutlineWorkOff/>,
        linkTo:"/dashboard/tnd"
      },
    ]
    
    const signOut = useSignOut();
    const navigate = useNavigate()
    const logout = () => {
      signOut()
      navigate('/')
    }
    

  return (
    <aside className={`fixed shadow-md border  left-0 z-40 w-80 h-screen transition-transform  ${isExpanded == props.toggle == false ? "" : "-translate-x-full sm:translate-x-0 "  }`}>
      <div
        id="links"
        className="flex flex-col h-full px-8 py-8 overflow-y-scroll bg-white gap-5 dark:bg-gray-800 dark:text-white text-base text-primary-main"
      >
        
    
       { testRole === "HR" ? 
          hrLinks.map((navLink)=>{
            return (
              <NavLink
          to={navLink.linkTo}
          key={navLink.linkTo}
          className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }
          onClick={props.handleToggle}
          >
            <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl">{navLink.linkIcon}</span>
          {navLink.linkName}</p>
        </NavLink>
            )
          }) : 
          tnDLinks.map((navLink)=>{
            return (
              <NavLink
          to={navLink.linkTo}
          key={navLink.linkTo}
          className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }
          >
            <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl">{navLink.linkIcon}</span>
          {navLink.linkName}</p>
        </NavLink>
            )
          })
        }
        <button
        onClick={logout}
          className={ " hover:rounded-r-full hover:bg-primary-main hover:text-white" }
          >
            <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl"><MdOutlineLogout/></span>
          Logout</p>
        </button>
      </div>
    </aside>
  );
}

