

import AppraisalsPendingReview from "./components/AppraisalsPendingReview";
import PreviousAppraisals from "./components/PreviousAppraisal";

export default function HodAppraisal() {
    //const [appraisal, setAppraisal] = useState(false);
   // const [hod, setHod] = useState(false);

   
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                


                <AppraisalsPendingReview />
                <PreviousAppraisals/>

          
            </div >
            </>
        )


        
       
  
}