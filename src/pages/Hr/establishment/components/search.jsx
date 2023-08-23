import { useState } from "react";
import EstablishmentSearchList from "./search_list";
import SelectInput from "../../../../components/SelectInput";

export default function EstablishmentSearch ({details,labelName }) {
    const [searchField, setSearchField] = useState("")

    const selectOptions = [
        {id:1,text:"one"},
        {id:2,text:"two"},
        {id:3,text:"three"},
    ]
    const filteredPersons = details.filter((person) => {
        return (
            person.establishmentName.toLowerCase().includes(searchField.toLowerCase()) || person.staff_number.toLowerCase().includes(searchField.toLowerCase())
        )
    })

    const  handleChange  = (e) => {
        setSearchField(e.target.value)
    }

    function searchList() {
        return (
            <EstablishmentSearchList filteredPersons={filteredPersons}/>
        );
    }
    return (
        <>
            <section className="flex flex-col">
      {/* <div className="">
        <h2 className="text-xl">Search for name of person</h2>
      </div> */}
      <div id="inputGroup" className="mb-8">        
        <SelectInput options={selectOptions} label={labelName} handleChange={handleChange}/>
      </div>
      {searchList()}
    </section>
        </>
    )
}