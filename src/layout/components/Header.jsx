import { useState} from "react";
import UccLogo from "../../assets/UccLogo";
import {  MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import Sidebar from "./Sidebar";
import Nav from "./Nav";





export default function Header() {
  //const [showModal, setShowModal] = useState(false);

  // function to display the dropdown menu
  // const showDropdown = () => {
  //   setShowModal(!showModal);

  //   setTimeout(() => {
  //     setShowModal(false);
  //     console.log("delayed for 5 seconds");
  //   }, 5000);
  //   clearTimeout;
  // };

  const [toggle,setToggle] = useState(false)
  const toggleSidebar = () => {
        setToggle(!toggle)
    }
  

    
  


  return (
    <>
    <header className="flex border   justify-between  items-center bg-white shadow-sm px-6 sticky top-0 z-30">
      <UccLogo />
      <div id="menu">
          <Nav/>
          <button className={` visible  lg:invisible px-6 py-6 z-10 absolute right-5`} onClick={toggleSidebar}>
            {
              toggle ? <span className="text-2xl"><MdOutlineClose  /></span> : <span className="text-2xl"><MdOutlineMenu  /></span> 
            }
          </button>
          
        </div>
    </header>
    <Sidebar toggle={toggle} handleToggle={toggleSidebar}/>
    </>
  );
}
