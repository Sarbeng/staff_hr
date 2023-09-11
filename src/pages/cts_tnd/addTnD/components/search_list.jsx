import AddTndDataCard from "./card";

export default function SearchList ({filteredPersons}) {
    const filtered = filteredPersons.map((addData)=><AddTndDataCard key={addData.id} addData={addData}/>);
    return (
        <>
            {filtered}
        </>
    );
}
