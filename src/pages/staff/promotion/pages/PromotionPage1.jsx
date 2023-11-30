


import TextInput from "../../../../components/TextInput";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import axios from "../../../../api/axios";
import { useAuthUser } from "react-auth-kit";
import { useEffect, useState } from "react";
import Select from "react-select";


export default function PromotionPage1() {
    const navigate = useNavigate()

    //link to api
    const url = '/display_data';

    //usestate for promotion data
    const [promotionData,setPromotionData] = useState(null)
    // getting the select options from data
    const [selectOptions, setSelectOptions] = useState(null)

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

      const [selectedOption, setSelectedOption] = useState(null);

      

    //getting token
    const auth  = useAuthUser();
    const token = auth().token; 

    const getPromotionData = async () => {
        const response = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Accept' : "application/json"
            }
        }).catch((error) => {
            console.log(error.response.data)
        })

        if (response) {
            console.log(response.data.job_ranks)
            setPromotionData(response.data.user_data[0])
            setSelectOptions(response.data.job_ranks)
            console.log(promotionData)
            console.log(selectOptions)

        }
    }

    useEffect(() => {
        getPromotionData()
    },[])

   
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <section id="heading" className="flex items-center justify-center mb-8">
                        <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                            <div className="flex gap-2 items-center">
                                <p className="text-primary-main capitalize text-sm w-full">Application for Promotion</p>
                                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                                <p className="bg-primary-main text-white  text-sm py-1 px-8 rounded-full w-full">Page 1 of 6</p>
                            </div>

                        </div>
                    </section>
                    <form >
                        <section id="inputs" className="flex flex-col gap-4">
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                    Promotion to the rank of
                                </label>
                                {/* Tried a select dropdown select here */}
                                {/* <Select
                                className="  mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={selectOptions}
      /> */}
                                <select 
                              className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                    name="aspiring_rank"
                                   
                                    
                                    >
                                    <option selected disabled>Select Rank</option>
                                    {selectOptions?.map((options) => {
                                        return <option>{options.title}</option>
                                    })}
                                    <option>Administrator 2</option>
                                </select>
                            
                            </div>
                            <div>
                                <TextInput
                                    inputStyle={"default"}
                                    name="department"
                                    type="text"
                                    label="Department"
                
                                    value={promotionData?.directorate} 
                                    />
                            </div>
                            <div>
                                <TextInput
                                      inputStyle={"default"}
                                    label="College/ Directorate"
                                    name="directorate"
                                    type="text"
                                
                                    value={promotionData?.directorate} 
                                />
        
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col  md:w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        E-mail Address
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                        name="email"
                                        type="email"
                                        value={promotionData?.ucc_mail}
                                        placeholder="Not set"

                                    />
                                  
                                </div>
                                <div id="inputGroup" className="flex flex-col md:w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Telephone
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                        name="phone"
                                        type="number"
                                        value={promotionData?.phone}
                                        placeholder="Not set"

                                    />
                                  
                                </div>
                               
</div>
                            <div className="flex flex-col md:flex-row  gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col md:w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Present Position held (If any)
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                        name="present_position"
                                        type="text"
                                        value={promotionData?.present_rank}
                                     

                                    />
                                  
                                </div>
                                <div id="inputGroup" className="flex flex-col md:w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Effective Date
                                    </label>
                                    <input
                                          className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                        name="effective_date"
                                        type="date"
                                        value={promotionData?.date_of_rank}
                                       
                                    />
                                   
                                </div>
                            </div>

                        </section>
                        <section id="buttonSection" className="flex w-full gap-4 mb-2 justify-center items-center md:items-end md:justify-end">
                           
                            <div className="md:w-1/2 w-full">
                                <Button buttonStyle="bg-primary-main text-white w-full">Save & Continue <MdOutlineChevronRight /></Button>

                            </div>

                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}