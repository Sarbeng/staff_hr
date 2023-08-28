import {  MdOutlineLibraryBooks,  MdOutlineList,MdOutlineLocalLibrary,  MdOutlineStackedLineChart, MdOutlineWifi, MdOutlineWorkOff } from "react-icons/md";
import { Link } from "react-router-dom";

export default function QuickLinks (){
    const quickLinks = [
        {
            linkTo:"apply_leave",
            linkName:"Apply Leave",
            icon: <MdOutlineWorkOff/>
        },
        {
            linkTo:"request_procurement",
            linkName:"Request Procurement",
            icon: <MdOutlineList/>
        },
        {
            linkTo:"apply_promotion",
            linkName:"Apply for Promotion",
            icon: <MdOutlineStackedLineChart/>
        },
        {
            linkTo:"/apraisal_form",
            linkName:"Fill Appraisal Form",
            icon: <MdOutlineLibraryBooks/>
        },
        {
            linkTo:"/eduroam",
            linkName:"Eduroam",
            icon: <MdOutlineWifi/>
        },
        {
            linkTo:"declaration_of_intent",
            linkName:"Declaration of Intent",
            icon: <MdOutlineLocalLibrary/>
        }
    ]
    return (
        <div>
<div className="max-w-md  bg-white rounded-xl shadow-md overflow-scroll  md:h-80 md:max-w-lg">
        <div className="md:flex">
          <div className="md:shrink-0">
            
          </div>
          <div className="p-8">
            <div className="capitalize tracking-wide text-xl  ">
              Quick Links
            </div>
            <hr className=" border-primary-main h-4" />
            
              <div>
                {quickLinks.map((links)=>{
                    return(
                        <Link
                to={links.linkTo} key={links.linkTo}
                className="mt-1 leading-tight flex items-center  w-full max-w-sm gap-3 py-4 px-4  hover:bg-primary-surface hover:rounded-full"
              >
                <span className="text-lg">{links.icon}</span>
                <p className="truncate ...">{links.linkName}</p> 
                
              </Link>
                    );
                })}
                
              </div>
          </div>
        </div>
      </div>
        </div>
    );
}