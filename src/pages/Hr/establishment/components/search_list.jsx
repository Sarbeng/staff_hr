import EstablishmentListCard from "./establishment_card";

export default function EstablishmentSearchList ({filteredPersons}) {
    const filtered = filteredPersons.map((establishment)=> <EstablishmentListCard key={establishment.id} establishment={establishment}/> )
    return (
        <>
            {filtered}
        </>
    );
}