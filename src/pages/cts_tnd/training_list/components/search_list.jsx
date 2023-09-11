import TrainingListCard from "./card";
import PromotionListCard from "./card";

export default function SearchList ({filteredPersons}) {
    const filtered = filteredPersons.map((training)=><TrainingListCard key={training.id} training={training}/>);
    return (
        <>
            {filtered}
        </>
    );
}
