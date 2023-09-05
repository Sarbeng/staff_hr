import Button from "../../../../components/Button";
import {MdOutlineVisibility,MdOutlineEdit,MdOutlineDelete} from "react-icons/md";
import SelectInput from "../../../../components/SelectInput";
import { useFormik, } from "formik";
import * as Yup from "yup";
import positionDetails from "../../../../data/positionDetails";
import { useState } from "react";
//import PositionList from "./positionList";

export default function SearchArea () {
    const area = [
        {id:1,text:"Accra Office"},{id:2,text:"Accra Guest House"}
    ]
    const area2 = [
        {id:1,text:"Accra Office"},{id:2,text:"Accra Guest House"}
    ]
    const [positionMap, setPositionMap] = useState([])




    const handleClick = (e) => {
        e.preventDefault()

    }

    const onSubmit = (values) => {
        alert(JSON.stringify(values,null,2))
        // first printing out the values of the list
        // next is to filter the list to bring out only one value based on what has been selected

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
                                   
                                    <SelectInput options={area} name={"department"} label={"Select Dept"} handleBlur={formik.handleBlur} handleChange={formik.handleChange} value={formik.values.department}/>
                                    {formik.touched.department && formik.errors.department ? (
                                        <div className="text-red-600">{formik.errors.department}</div>
                                    ) : null}
                                </div>
                                <div id="inputGroup" className="flex flex-col w-full" >
                                   
                            
                                    <SelectInput options={area} name={"position"} label={"Select Position"}  handleBlur={formik.handleBlur} handleChange={formik.handleChange}/>
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
                
            </section>
        </>
    );
}

