import AppraisalListCard from "./appraisal_card";

export default function SearchList ({filteredPersons}) {
    const filtered = filteredPersons.map((appraisal)=><AppraisalListCard key={appraisal.id} appraisal={appraisal}/>);
    return (
        <>
            {filtered}
        </>
    );
}
