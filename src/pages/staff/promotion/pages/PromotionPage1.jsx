


import TextInput from "../../../../components/TextInput";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import axios from "../../../../api/axios";
import { useAuthUser } from "react-auth-kit";
import { useEffect, useState,useRef } from "react";
import Select from "react-select";


export default function PromotionPage1() {
    const navigate = useNavigate()

    //using useRef to access the input data
    const promotionRankInputElement =useRef()
    const typeOfPromotionInputeElement = useRef()
    const deptInputElement = useRef()
    const collegeInputElement = useRef()
    const emailInputElement = useRef()
    const phoneInputElement = useRef()
    const presentRankInputElement = useRef()
    const presentRankEffectiveDateInputElement = useRef()
    const presentPositionHeldInputElement =useRef()
    const positionHeldEffectiveDateInputElement = useRef()
    
   

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            //take note of the fact that position_id in database is equal to job_id
            //take note of staff_promotion and promotion_data

            //// this is the present rank if any section //////////
            position_id : promotionRankInputElement.current?.value,
            promo_comments : typeOfPromotionInputeElement.current?.value,
            dept: deptInputElement.current?.value,
            college: collegeInputElement.current?.value,
            email: emailInputElement.current?.value,
            phone: phoneInputElement.current?.value,
            present_rank: presentRankInputElement.current?.value,
            pr_edate : presentRankEffectiveDateInputElement.current?.value,
            present_rank_ifany: promotionRankInputElement.current?.value,
            pp_edate: positionHeldEffectiveDateInputElement.current?.value
        }
        console.log(data)
    }

    //link to api
    const url = '/display_data';

    //usestate for promotion data
    const [promotionData,setPromotionData] = useState(null)
    // getting the select options from data
    const [selectOptions, setSelectOptions] = useState(null)
    const [college, setCollege] = useState(null)

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    //   ];

    //   const [selectedOption, setSelectedOption] = useState(null);

      //type of promotion
      const type_of_promotion = [
        {id:1,type:"REGULAR PROMOTION"},
        {id:2,type:"ACCELERATED PROMOTION"},
      ]

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
            //console.log(response.data.job_ranks)
            //console.log(response.data.college[0].college)
            setPromotionData(response.data.user_data[0])
            setSelectOptions(response.data.job_ranks)
            setCollege(response.data.college[0].college)
            //console.log(promotionData)
           // console.log(selectOptions)

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
                    <form  onSubmit={handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">
                            
                            <div className="flex gap-4 flex-col md:flex-row">
                            <div id="inputGroup" className="flex flex-col  md:w-1/2" >
                            <label className="capitalize" htmlFor="email">
                                    Promotion to the Rank of:
                                </label>
                           
     
                                <select 
                              className={` mt-2 mb-2 h-12 border text-sm  rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                    name="aspiring_rank"
                                   ref={promotionRankInputElement}
                                    
                                    >
                                  <option selected disabled>Select Promotion Rank</option>
                                    {selectOptions?.map((options) => {
                                        return <option key={options.position_id} value={options.position_id}>{options.title}</option>
                                    })}
                            
                                </select>
                                  
                                </div>
                                <div id="inputGroup" className="flex flex-col  md:w-1/2" >
                                <label className="capitalize" htmlFor="email">
                                    Type of Promotion
                                </label>
                           
     
                                <select 
                              className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                    name="aspiring_rank"
                                   ref={typeOfPromotionInputeElement}
                                    
                                    >
                                         <option selected  disabled>Select type</option>
                                    {type_of_promotion?.map((options) => {
                                        return <option key={options.type} value={options.type}>{options.type}</option>
                                    })}
                            
                                    
                            
                                </select>
                                  
                                </div>
                               
                                
                            </div>
                            <div className="flex gap-4 flex-col md:flex-row">
                            <div id="inputGroup" className="flex flex-col  md:w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                    Department
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                        name="department"
                                        type="text"
                                        ref={deptInputElement}
                                    value={promotionData?.directorate} 
                                        placeholder="Not set"

                                    />
                                  
                                </div>
                                <div id="inputGroup" className="flex flex-col  md:w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                    College/ Directorate
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                        name="directorate"
                                        type="text"
                                        ref={collegeInputElement}
                                    value={college} 
                                        placeholder="Not set"

                                    />
                                  
                                </div>
                               
                                
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
                                        ref={emailInputElement}
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
                                        ref={phoneInputElement}
                                        value={promotionData?.phone}
                                        placeholder="Not set"

                                    />
                                  
                                </div>
                               
</div>
                            <div className="flex flex-col md:flex-row  gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col md:w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Present Rank
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                        name="present_position"
                                        type="text"
                                        ref={presentRankInputElement}
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
                                        ref={presentRankEffectiveDateInputElement}
                                        value={promotionData?.date_of_rank}
                                       
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
                                        ref={presentPositionHeldInputElement}
                                     

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
                                        ref={positionHeldEffectiveDateInputElement}

                                       
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