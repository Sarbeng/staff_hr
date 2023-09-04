
import { MdOutlineBallot, } from "react-icons/md";
import CurrentAppraisal from "./components/CurrentAppraisal";
import PreviousAppraisals from "./components/PreviousAppraisal";
import NoAppraisal from "./components/NoAppraisal";
import ApplyButton from "../../../components/ApplicationCard";
import { useEffect, useState } from "react";
import AppraisalsPendingReview from "./components/AppraisalsPendingReview";

export default function Appraisal () {
    const [appraisal, setAppraisal] = useState(false);
    const [hod,setHod] = useState(false);
    
    useEffect(()=>{
        setAppraisal(false)
        setHod(false)
    },[hod])
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                
                {appraisal?  <>
               
                    <CurrentAppraisal/>
           
             
           
           
            <PreviousAppraisals/>
            </>
            :
            <>
            {/*If no appraisal exists display this */}
            <ApplyButton to="/dashboard/appraisalPage1" icon={<MdOutlineBallot/> } heading="Fill Appraisal Form"/>
            <NoAppraisal/>
            {/* Pending  Appraisals for Review Section */}
                 {hod ?
                <AppraisalsPendingReview/> : null
                }
            </>
        }
            
                 
            </div>
        </>
    );
}