import CertificationInformation from "./pages/certification_information";
import FamilyInformation from "./pages/family_information";
import PersonalInformation from "./pages/personal_infomation";
import TransferInformation from "./pages/transfer_information";
import UniversityInformation from "./pages/university_information";


import ProfileHeader from "./components/profile_header";
import ImageProfile from "./pages/image_profile";
import axios from "../../../api/axios";
import {useAuthUser} from "react-auth-kit";
import { useEffect, useState } from "react";
//import DocsInformation from "./pages/docs_information";
//import { Tab,Tabs } from "../../../components/Tabs";

export default function PersonalDetails () {
    const profileUrl = "/profile";
    const auth = useAuthUser();
    const token = auth().token;
    const [profileData, setProfileData] = useState();


    const getPersonalDetails = async () => {
        const response = await axios.get(profileUrl,{
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept" : "application/json"
            }
        }).catch((error) => {
            console.log(error.response.data)
        })

        if (response) {
            console.log(response.data)
            setProfileData(response.data)
        }
    }
  

    useEffect(() => {
        getPersonalDetails()
    },[])

    const bioData = profileData?.bio_data[0];
    const relations = profileData?.relations;
    const certifications = profileData?.certificates;
    const transfers = profileData?.transfers;
    console.log(transfers);
    //calling the staff_id
    const staff_no = auth().user_data.staff_no;

    //console.log(profileData.bio_data[0])
    return (
        
        <>
            
            

            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <ImageProfile staff_picture={staff_no} fname={bioData?.fname} mname={bioData?.mname} lname={bioData?.lname} staff_no={staff_no} staff_status={bioData?.staff_status} staff_group={bioData?.staff_group}/>
                    <ProfileHeader title={"Personal Details"}/>
                    <PersonalInformation fname={bioData?.fname} mname={bioData?.mname ? bioData?.name : "N/A"} lname={bioData?.lname} age={bioData?.age} dob={bioData?.dob} birth_place={bioData?.birth_place} hometown={bioData?.hometown} district={bioData?.district} region={bioData?.region} nationality={bioData?.nationality? bioData?.nationality : "Not Set"} address={bioData?.address ? bioData?.address : "Not Set"} phone={bioData?.phone} ucc_mail={bioData?.ucc_mail}/>
                    {/* {console.log(bioData)} */}
                    <ProfileHeader title={"Family Information"}/>
                    {
                        // mapping through the relative data to display them one by one
                        relations?.map((relation) => {
                            return (
                                <FamilyInformation key={relation.id} name={relation.name} relation={relation.relation} hometown={relation.hometown ? relation.hometown : "Not Provided"} address={relation.address ? relation.address : "Not Provided"}/>
                            )
                        })
                    }
                    <ProfileHeader title={"Certificate Information"}/>
                    {
                        // mapping through the users certifications
                        certifications?.map((certificates) => {
                            return (
                                <CertificationInformation key={certificates.id} institution={certificates.institution} qualify={certificates.qualify} specialize={certificates.specialize} cert_rate={certificates.cert_rate ? certificates.cert_rate : "Not Provided"}/>
                            )
                        })
                    }
                    <ProfileHeader title={"University Information"}/>
                    <UniversityInformation ssnit_no={bioData?.ssnit ? bioData?.ssnit : "Not Provided"} account_no={bioData?.account_no ? bioData?.account_no : "Not Provided"} bank_name={bioData?.bank_name? bioData?.bank_name : "Not Provided"} account_branch={bioData?.account_branch? bioData?.account_branch : "Not Provided" } current_designation={bioData?.jobtitle} appointment_date={bioData?.appoint_date} first_appointment_date={bioData?.first_appoint} first_confirmation_date={bioData?.first_confirm ? bioData?.first_confirm : "Not Set"} staff_no={staff_no}  ucc_mail={bioData?.ucc_mail} grade={bioData?.grade}/>
                    <ProfileHeader title={"Transfer Information"}/>
                    {
                        transfers?.map(transfer => {
                            return (
                                <TransferInformation key={transfer.id} date={transfer.transdate} fromunit={transfer.fromunit} tounit={transfer.tounit}/>
                            )
                        })
                    }
                    {/* This is a section placed here just in case, it becomes neccessary */}
                    {/* <section>
                        <ProfileHeader title={"Documents"}/>
                        <DocsInformation/>
                    </section> */}
                </section>
            </div>
        </>
        
    );
}