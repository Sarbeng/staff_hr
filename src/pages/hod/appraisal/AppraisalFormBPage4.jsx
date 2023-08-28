

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";


export default function AppraisalFormBPage4() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            relates_well: "",
            establishes_rapport: "",
            practices_active_listening: "",
            uses_diplomacy: "",
        },
        validationSchema: Yup.object({
            relates_well: Yup.string().required("This field cannot be empty"),
            establishes_rapport: Yup.string().required("This  field cannot be empty"),
            practices_active_listening: Yup.string().required("This  field cannot be empty"),
            uses_diplomacy: Yup.string().required("This  field cannot be empty"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/hod_appraisalPage5')

        }
    })
    return (
        <>
             <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading formName="Appraisal Form B" pageNumber="Page 4 of 13" pageHeader="Interpersonal Communication"/>
                    <form onSubmit={formik.handleSubmit}>
                    
                        <section id="inputs" className="flex flex-col gap-4">

                           
                        <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Relates well to all people – up, down, and across – internally and externally to the School/Department
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.relates_well && formik.errors.relates_well ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="relates_well"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.relates_well}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Satisfactory</option>
                                    <option>Unsatisfactory</option>
                                </select>
                                {formik.touched.relates_well && formik.errors.relates_well ? (
                        <div className="text-red-600">{formik.errors.relates_well}</div>
                      ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Establishes rapport; builds and maintains effective working relationships
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.establishes_rapport && formik.errors.establishes_rapport ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="establishes_rapport"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.establishes_rapport}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Successful</option>
                                    <option>Unsuccessful</option>
                                </select>
                                {formik.touched.establishes_rapport && formik.errors.establishes_rapport ? (
                        <div className="text-red-600">{formik.errors.establishes_rapport}</div>
                      ) : null}
                            </div> <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Practices attentive and active listening
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.practices_active_listening && formik.errors.practices_active_listening ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="practices_active_listening"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.practices_active_listening}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Successful</option>
                                    <option>Unsuccessful</option>
                                </select>
                                {formik.touched.practices_active_listening && formik.errors.practices_active_listening ? (
                        <div className="text-red-600">{formik.errors.practices_active_listening}</div>
                      ) : null}
                            </div>
                             <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Uses diplomacy and tact; can diffuse high-tension situations comfortably
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.uses_diplomacy && formik.errors.uses_diplomacy ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="uses_diplomacy"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.uses_diplomacy}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Above Expectations</option>
                                    <option>Below Expectations</option>
                                </select>
                                {formik.touched.uses_diplomacy && formik.errors.uses_diplomacy ? (
                        <div className="text-red-600">{formik.errors.uses_diplomacy}</div>
                      ) : null}
                            </div>
                            
                            
                           
                            
                        </section>
                        <section id="buttonSection" className="flex w-full gap-4 items-end justify-end">
                        <div className="w-1/2">
                        {/* <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" ><MdOutlineChevronLeft/> Back</Button> */}
                        </div>
                        <div className="w-1/2 ">
                        <Button buttonStyle="bg-primary-main text-white w-full">Save & Continue <MdOutlineChevronRight/></Button>
                           
                        </div>
                        
                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}