
import { MdOutlineBallot, } from "react-icons/md";
import CurrentAppraisal from "./components/CurrentAppraisal";
import PreviousAppraisals from "./components/components/PreviousAppraisal";
import NoAppraisal from "./components/NoAppraisal";
import ApplyButton from "../../../components/ApplicationCard";
import { useEffect, useState } from "react";
import AppraisalsPendingReview from "./components/AppraisalsPendingReview";

export default function Appraisal () {
    const [appraisal, setAppraisal] = useState(false);
    const [hod,setHod] = useState(false);
    
    useEffect(()=>{
        setAppraisal(false)
        setHod(true)
    },[hod])
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                
                {appraisal?  <>
                {/* if appraisal exists display current  Previous Appraisals Section */}
                    {/* Pending  Appraisals for Review Section */}
                 {hod ?
                <AppraisalsPendingReview/> : null
                }
                    <CurrentAppraisal/>
           
             
           
           
            <PreviousAppraisals/>
            </>
            :
            <>
            {/*If no appraisal exists display this */}
            <ApplyButton To="/dashboard/appraisalPage1" Icon={<MdOutlineBallot/> } heading="Fill Appraisal Form"/>
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