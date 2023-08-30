import {  useNavigate } from "react-router-dom";
import {  useState } from "react";
import {   MdOutlineExpandLess, MdOutlineExpandMore, MdOutlineHail,  MdOutlineLogout, MdOutlinePeopleOutline,  MdOutlineTrackChanges,  } from "react-icons/md"
import { useSignOut, useAuthUser } from "react-auth-kit";
import MainNav from "./sidebarComponents/MainNav";
import HrNav from "./sidebarComponents/HrNav";
import HODNav from "./sidebarComponents/HODNav";
import TNDNav from "./sidebarComponents/TNDNav";






export default function Sidebar(props) {
  // const activeLink = 'rounded-r-full bg-primary-main text-white'
  // const normalLink = ''
  const [isExpanded] = useState(false);

  //this section is used to check for the role of the user, currently not using it so we'll see

  //const [testRole, setTestRole] = useState("HR");
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



const [showTnD,setShowTnD] = useState(false);
const [showHr,setShowHr] = useState(false);
const [showHod,setShowHod] = useState(false);

const handleshowTnD = () => {
  setShowTnD(!showTnD)
  // setShowHod(false)
  // setShowHr(false)
}

const handleshowHr = () => {
  setShowHr(!showHr)
  // setShowHod(false)
  // setShowTnD(false)
}

const handleshowHod = () => {
  setShowHod(!showHod)
  // setShowTnD(false)
  // setShowHr(false)
}

const closeAllSidebars = () => {
  setShowHod(false)
  setShowTnD(false)
  setShowHr(false)
}


  const signOut = useSignOut();
  const navigate = useNavigate()
  const logout = () => {
    signOut()
    navigate('/')
  }


  return (
    <aside className={`fixed shadow-md border  left-0 z-40 w-80 h-screen transition-transform  ${isExpanded == props.toggle == false ? "" : "-translate-x-full sm:translate-x-0 "}`}>
      <div
        id="links"
        className="flex flex-col h-full px-8 py-8 overflow-y-scroll bg-white gap-5 dark:bg-gray-800 dark:text-white text-base text-primary-main pb-16"
      >


        <MainNav onClick={closeAllSidebars}/>
        
        {/* start hiding and displaying HR Section */}
        <button
          onClick={handleshowHr}
          className={"flex justify-between pr-3 items-center focus:rounded-r-full  focus:bg-primary-main focus:text-white hover:rounded-r-full hover:bg-primary-main hover:text-white"}
        >
          <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl"><MdOutlinePeopleOutline /></span>
            Hr</p>
            <span className="text-2xl ">{showHr ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}</span>
        </button>
        {showHr ? <HrNav /> : null }
        {/* start hiding and displaying HOD Section */}
        <button
          onClick={handleshowHod}
          className={"pr-3 flex  items-center justify-between hover:rounded-r-full hover:bg-primary-main hover:text-white"}
        >
          <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl"><MdOutlineHail /></span>
            HOD</p>
            <span className="text-2xl ">{showHod ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}</span>
        </button>
        {showHod ? <HODNav /> : null}

        {/* start hiding and displaying t & D Section */}
        <button
          onClick={handleshowTnD}
          className={"flex justify-between items-center focus:rounded-r-full pr-3  focus:bg-primary-main focus:text-white   hover:rounded-r-full hover:bg-primary-main hover:text-white"}
        >
          <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl"><MdOutlineTrackChanges /></span>
            T&D</p>
            <span className="text-2xl ">{showTnD ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}</span>
        </button>
        { showTnD ? <TNDNav/> : null}
       
        <button
          onClick={logout}
          className={ "hover:rounded-r-full hover:bg-primary-main hover:text-white"}
        >
          <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl"><MdOutlineLogout /></span>
            Logout</p>
        </button>
      </div>
    </aside>
  );
}

