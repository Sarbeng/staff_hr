import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import {
  MdOutlineDashboard,
  MdOutlinePerson,
  MdOutlineWorkOff,
  MdOutlineLogout,
} from "react-icons/md";
import {useSignOut,useAuthUser} from "react-auth-kit";





export default function Sidebar(props) {
    const activeLink = 'rounded-r-full bg-primary-main text-white'
    const normalLink = ''
    const [toggle] = useState(false);
    const [testRole, setTestRole] = useState("");
    const auth = useAuthUser();
    useEffect(()=>{
       let role = auth().role;
       if (role == "08"){
        setTestRole("HR")
        console.log(testRole,role)
       }
       else if (role == "07"){
        setTestRole("HR")
        console.log(testRole,role)
       }
       else if (role == "06"){
        setTestRole("HR")
        console.log(testRole,role)
       }
       else if (role == "05"){
        setTestRole("HR")
        console.log(testRole,role)
       }
       else if (role == "04"){
        setTestRole("HR")
        console.log(testRole,role)
       }
       else if (role == "03"){
        setTestRole("tnD")
        console.log(testRole,role)
       }
       else if (role == "02"){
        setTestRole("tnD")
        console.log(testRole,role)
       }
       else if (role == "01"){
        setTestRole("tnD")
        console.log(testRole,role)
       }
    },[])
    

    const hrLinks = [
      {
        linkName:"Dashboard",
        linkIcon: <MdOutlineDashboard/>,
        linkTo:"/dashboard/home"
      },
      {
        linkName:"HR",
        linkIcon: <MdOutlinePerson/>,
        linkTo:"/dashboard/hr"
      }
      ,
      // {
      //   linkName:"Cts & Tnd",
      //   linkIcon: <MdOutlineWorkOff/>,
      //   linkTo:"/dashboard/tnd"
      // },
      // {
      //   linkName:"Appraisal",
      //   linkIcon: <MdOutlineBallot/>,
      //   linkTo:"/appraisal"
      // },
      // {
      //   linkName:"Promotion",
      //   linkIcon: <MdOutlineStackedLineChart/>,
      //   linkTo:"/promotion"
      // },
      // {
      //   linkName:"Procurement",
      //   linkIcon: <MdOutlineShoppingBag/>,
      //   linkTo:"/procurement"
      // },
      
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
    <aside className={`fixed shadow-md border  left-0 z-40 w-80 h-screen transition-transform  ${toggle == props.toggle == false ? "" : "-translate-x-full sm:translate-x-0 "  }`}>
      <div
        id="links"
        className="flex flex-col h-full px-8 py-8 overflow-y-auto bg-white gap-5 dark:bg-gray-800 dark:text-white text-base text-primary-main  "
      >
        
        { testRole === "HR" ? 
          hrLinks.map((navLink)=>{
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

