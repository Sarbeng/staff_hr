import { useState } from "react";
import SearchList from "./search_list";
import TextInput from "../../../../components/TextInput";

export default function Search ({details}) {
    const [searchField, setSearchField] = useState("")

    const filteredPersons = details.filter((person) => {
        return (
            person.staff_name.toLowerCase().includes(searchField.toLowerCase()) || person.staff_number.toLowerCase().includes(searchField.toLowerCase())
        )
    })

    const  handleChange  = (e) => {
        setSearchField(e.target.value)
    }

    function searchList() {
        return (
            <SearchList filteredPersons={filteredPersons}/>
        );
    }
    return (
        <>
            <section className="flex flex-col">
      {/* <div className="">
        <h2 className="text-xl">Search for name of person</h2>
      </div> */}
      <div id="inputGroup" className="mb-8">        
        <TextInput label={"Search People"} handleChange={handleChange}/>
      </div>
      {searchList()}
    </section>
        </>
    )
}