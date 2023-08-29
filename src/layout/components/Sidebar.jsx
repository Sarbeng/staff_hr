import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import {MdOutlineLogout,} from "react-icons/md"
import {useSignOut,useAuthUser} from "react-auth-kit";
import MainNav from "./sidebarComponents/MainNav";






export default function Sidebar(props) {
    //const activeLink = 'rounded-r-full bg-primary-main text-white'
    //const normalLink = ''
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
        
    
       <MainNav/>
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

