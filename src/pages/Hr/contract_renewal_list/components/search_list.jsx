import RenewalList from "./renewal_list";

export default function SearchList ({filteredPersons}) {
    const filtered = filteredPersons.map((renewal)=><RenewalList key={renewal.id} renewal={renewal}/>);
    return (
        <>
            {filtered}
        </>
    );
}
