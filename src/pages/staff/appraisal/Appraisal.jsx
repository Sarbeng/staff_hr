
import { MdOutlineBallot, } from "react-icons/md";
import CurrentAppraisal from "./components/CurrentAppraisal";
import PreviousAppraisals from "./components/PreviousAppraisal";
import NoAppraisal from "./components/NoAppraisal";
import ApplyButton from "../../../components/ApplicationCard";
import { useEffect, useState } from "react";
import AppraisalsPendingReview from "./components/AppraisalsPendingReview";
import axios from "../../../api/axios";
import { useAuthUser } from "react-auth-kit";
import ViewAppraisal from "./components/ViewAppraisal";

export default function Appraisal() {
    const [appraisal, setAppraisal] = useState(false);
    const [hod, setHod] = useState(false);
    const appraisalcheckUrl = "/appraisal_check";
    // getting the token to pass it to the backend
    const auth = useAuthUser();
    const token = auth().token;

    const getAppraisalCheck = async () => {
        const response = await axios.get(appraisalcheckUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept": "application/json"
            }
        }).catch((error) => {
            console.log(error.response.data)
        })

        if (response) {
            console.log(response.data)
            setAppraisal(response.data)
        }
    }

    console.log(appraisal.appraisal)
    useEffect(() => {
        getAppraisalCheck()
    }, [])

    // delete appraisal
    const handleDelete = async () => {
        const id = appraisal.appraisal.app_self_id;
        const isConfirmed = window.confirm('Are you sure you want to delete this?');
    
        if (isConfirmed) {
          const deleteUrl = `/appraisal/${id}`;
        const response = await axios.delete(deleteUrl,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept":"application/json"
          }
        }).catch((error) => {
          console.log(error.response.data)
        })
    
        if (response) {
          console.log(response.data)
          setAppraisal(false)
        }
        }
      }
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                {appraisal.appraisal != null ? <>

                    <CurrentAppraisal handleDelete={handleDelete} status={appraisal.appraisal.app_status == 1 ? "Form Completed" : "Form Not Completed"} date={appraisal.appraisal.created_date} completion_date={appraisal.appraisal.updated_date} percentage_completion={appraisal.appraisal_count}/>

                    {/* <PreviousAppraisals /> */}
                </>
                    :
                    <>
                        {/*If no appraisal exists display this */}
                        <ApplyButton to="/dashboard/appraisalPage1" icon={<MdOutlineBallot />} heading="Fill Appraisal Form" />
                        <NoAppraisal />
                        {/* Pending  Appraisals for Review Section */}
                    </>
                }


            </div>
        </>
    );
}