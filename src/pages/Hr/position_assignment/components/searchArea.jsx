import Button from "../../../../components/Button";
import {MdOutlineVisibility,MdOutlineEdit,MdOutlineDelete} from "react-icons/md";
import SelectInput from "../../../../components/SelectInput";
import { useFormik, } from "formik";
import * as Yup from "yup";
import positionDetails from "../../../../data/positionDetails";
import { useState } from "react";
import PositionList from "./positionList";
//import PositionList from "./positionList";

export default function SearchArea () {
    const area = [
        {id:1,text:"ADEHYE HALL"},{id:2,text:"CASELY-HARFORD HALL"}
    ]
    const area2 = [
        {id:1,text:"All Positions"},{id:2,text:"Head"}
    ]
    const [positionMap, setPositionMap] = useState([])

   

    const onSubmit = (values) => {
        alert(JSON.stringify(values,null,2))
       
        //so the concept is for the form to be submitted
        // after that we print out the data to the page using the state
        // we then filter out to get exactly the value of what we search for
        // const newState = positionMap.filter((person) => person.name_of_dept == values.department && person.position == values.position).map(((position) => {
        //      console.log(position)
        // }))

        const newState = positionDetails.map((position) => position )
        console.log(newState)
        const filterState = newState.filter((person) => person.name_of_dept == values.department)
        console.log(filterState)
        setPositionMap(filterState)
        console.log(positionMap)

        // after writing this i realized i could just have posted to the database, stored the response in a state 
        // and then printed out the value
    }

    const formik = useFormik({
        initialValues:{
            department:"",
            position:""
        },
        validationSchema: Yup.object({
            department:Yup.string().required("Please select a department"),
            position:Yup.string().required("Please select a position")
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
                                <div id="inputGroup" className="flex flex-col w-full" >
                                   
                            
                                    <SelectInput options={area2} name={"position"} label={"Select Position"}  handleBlur={formik.handleBlur} handleChange={formik.handleChange} disabledOption={"Position"}/>
                                    {formik.touched.position && formik.errors.position ? (
                                        <div className="text-red-600">{formik.errors.position}</div>
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
                { positionMap &&
                    positionMap.map((position) => {
                        return (
                            <div key={""} className=" overflow-scroll mb-4 mt-4">
        <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
            <div className="flex flex-col max-w-xs w-48 h-full gap-4">
                <h4 className="text-xs uppercase font-semibold h-4">
                    Staff Details
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{position.name_of_head}</p>
                <p className="text-sm" ><span className="text-slate-400">{position.position}</span></p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs w-40 gap-4  h-full">
                <h4 className="text-xs uppercase font-semibold h-4">
                  Department
                </h4>
                <p className="truncate... w-fit py-1 text-sm">{position.name_of_dept}</p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col max-w-xs h-full w-48 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                    Position Details
                </h4>
                <p className="truncate ... w-fit py-1 text-sm"><span className="text-slate-400">Started: </span>{position.date_started}</p>
                <p className="text-sm" ><span className="text-slate-400">Ended: </span>{position.date_ended}</p>
            </div>
            <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex flex-col w-fit max-w-xs h-full w-48 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                    Days to End of Tenure
                </h4>
                <p className="text-sm bg-primary-surface p-1 w-16 h-16 justify-center items-center flex px-2 rounded-full text-primary-main text-2xl" ><span> </span>{position.days_to_end_of_tenure}</p>
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

