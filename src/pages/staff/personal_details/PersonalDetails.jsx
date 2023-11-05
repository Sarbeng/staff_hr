import CertificationInformation from "./pages/certification_information";
import FamilyInformation from "./pages/family_information";
import PersonalInformation from "./pages/personal_infomation";
import TransferInformation from "./pages/transfer_information";
import UniversityInformation from "./pages/university_information";

import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import {MdOutlineChevronRight} from "react-icons/md";
import ProfileHeader from "./components/profile_header";
import ImageProfile from "./pages/image_profile";
//import { Tab,Tabs } from "../../../components/Tabs";

export default function PersonalDetails () {
    return (
        
        <>
            
            

            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <ImageProfile/>
                    <ProfileHeader title={"Personal Details"}/>
                    <PersonalInformation/>
                    <ProfileHeader title={"Family Information"}/>
                    <FamilyInformation/>
                    <ProfileHeader title={"Certificate Information"}/>
                    <CertificationInformation/>
                    <ProfileHeader title={"University Information"}/>
                    <UniversityInformation/>
                    <ProfileHeader title={"Transfer Information"}/>
                    <TransferInformation/>
                </section>
            </div>
        </>
        
    );
}