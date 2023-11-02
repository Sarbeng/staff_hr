import CertificationInformation from "./pages/certification_information";
import FamilyInformation from "./pages/family_information";
import PersonalInformation from "./pages/personal_infomation";
import TransferInformation from "./pages/transfer_information";
import UniversityInformation from "./pages/university_information";

export default function PersonalDetails () {
    return (
        
        <>
            <PersonalInformation/>
            <UniversityInformation/>
            <FamilyInformation/>
            <TransferInformation/>
            <CertificationInformation/>
        </>
        
    );
}