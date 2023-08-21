import PromotionListCard from "./card";

export default function SearchList ({filteredPersons}) {
    const filtered = filteredPersons.map((promotion)=><PromotionListCard key={promotion.id} promotion={promotion}/>);
    return (
        <>
            {filtered}
        </>
    );
}
