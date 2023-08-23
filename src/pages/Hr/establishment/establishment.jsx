import establishmentDetails from "../../../data/establishmentDetails";
import EstablishmentSearch from "./components/search";

export default function Establishment () {
    return (
        <>
            <EstablishmentSearch labelName={"Select Establishments"} details={establishmentDetails}/>
        </>
    );
}