import Button from "../../../../components/Button";
import {MdOutlineVisibility,MdOutlineEdit,} from "react-icons/md";
import SelectInput from "../../../../components/SelectInput";
import { useFormik, } from "formik";
import * as Yup from "yup";
import establishmentDetails from "../../../../data/establishmentDetails";
import { useState } from "react";
import EstablishmentList from "./establishmentList";
//import PositionList from "./positionList";

export default function SearchArea () {
    const area = [
        {id:1,text:"ACCRA GUEST HOUSE --> NON-ACADEMIC"},{id:2,text:"ADEHYE HALL --> NON-ACADEMIC"}
    ]
    
    const [establishmentMap, setEstablishmentMap] = useState([])

   

    const onSubmit = (values) => {
        alert(JSON.stringify(values,null,2))
       
        //so the concept is for the form to be submitted
        // after that we print out the data to the page using the state
        // we then filter out to get exactly the value of what we search for
        // const newState = positionMap.filter((person) => person.name_of_dept == values.department && person.position == values.position).map(((position) => {
        //      console.log(position)
        // }))

        const newState = establishmentDetails.map((establishment) => establishment )
        console.log(newState)
        const filterState = newState.filter((establishment) => establishment.department_name == values.department)
        console.log(filterState)
        setEstablishmentMap(filterState)
        console.log(establishmentMap)

        // after writing this i realized i could just have posted to the database, stored the response in a state 
        // and then printed out the value
    }

    const formik = useFormik({
        initialValues:{
            department:"",
        },
        validationSchema: Yup.object({
            department:Yup.string().required("Please select a department"),
        }),
        validateOnBlur:true,
        onSubmit,
    })
  
    return (
        <>
            <section id="searchSection">
                <form onSubmit={formik.handleSubmit}  className="flex gap-4 w-full bg-primary-surface  rounded-lg items-center py-4 justify-center px-4 shadow-sm">
              
                <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-full" >
                                   
                                    <SelectInput options={area} name={"department"} label={"Select Department"} handleBlur={formik.handleBlur} handleChange={formik.handleChange} disabledOption={"Department"}/>
                                    {formik.touched.department && formik.errors.department ? (
                                        <div className="text-red-600">{formik.errors.department}</div>
                                    ) : null}
                                </div>
                                
                                <div className="flex flex-col w-full mt-[-8px]">
                                <Button buttonStyle={` w-full text-white ${formik.isValid ? "bg-primary-main " : "bg-primary-border"}`} disabled={!formik.isValid} type="submit">
                Search
              </Button>
                                </div>
                            </div>
               
                </form>
            </section>
            <section>
                { establishmentMap &&
                    establishmentMap.map((establishment) => {
                        return (
                            <div key={""} className=" overflow-scroll mb-4 mt-4">
        <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Job Title
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{establishment.job_title}</p>
               
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-40 gap-4  h-full">
                <h4 className="text-xs uppercase font-semibold h-4">
                  Staff Type
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{establishment.staff_type}</p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs h-full w-fit gap-4">
                <h4 className="text-xs uppercase font-semibold">
                   Actual No
                </h4>
                <p className="text-sm bg-primary-surface p-1 w-16 h-16 justify-center items-center flex px-2 rounded-full text-primary-main text-2xl" ><span> </span>{establishment.actual_no}</p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col w-fit max-w-xs h-full  gap-4">
                <h4 className="text-xs uppercase font-semibold">
                    EXpected No.
                </h4>
                <p className="text-sm bg-primary-surface p-1 w-16 h-16 justify-center items-center flex px-2 rounded-full text-primary-main text-2xl" ><span> </span>{establishment.expected_no}</p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col w-fit max-w-xs h-full w-48 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                    Difference
                </h4>
                <p className="text-sm bg-primary-surface p-1 w-16 h-16 justify-center items-center flex px-2 rounded-full text-primary-main text-2xl" ><span> </span>{establishment.different}</p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            
            <div className="flex gap-4 px-8">
                <button
                    // href={leaveList.viewIcon.link}
                    className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"

                >
                    <span className="text-2xl"><MdOutlineVisibility /></span>
                    <p className="truncate ... text-xs">
                        View
                    </p>
                </button>

                <div className="flex gap-3">
                    <button

                        className="flex flex-col text-red-800  max-w-xs w-full gap-3  items-center justify-center"

                    >
                        <span className="text-2xl">
                            <MdOutlineEdit />
                        </span>
                        <p className="truncate ... text-xs">Edit</p>
                    </button>
                    
                </div>

            </div>

            {/* <!-- Pin to top right corner --> */}
        </div>
    </div>
                        )
                    })
                }
            </section>
        </>
    );
}

