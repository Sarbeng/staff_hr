import TndApplicantsCard from "./card";

export default function SearchList ({filteredPersons}) {
    const filtered = filteredPersons.map((applicants)=><TndApplicantsCard key={applicants.id} applicants={applicants}/>);
    return (
        <>
            {filtered}
        </>
    );
}
