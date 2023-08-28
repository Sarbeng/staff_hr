

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";




export default function AppraisalFormBPage2() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            level_of_knowlegde: "",
            knowlegde_application: "",
            keeps_up_to_date: "",
           
        },
        validationSchema: Yup.object({
            level_of_knowlegde: Yup.string().required("This field cannot be empty"),
            knowlegde_application: Yup.string().required("This field cannot be empty"),
            keeps_up_to_date: Yup.string().required(),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/hod_appraisalPage3')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading formName="Appraisal Form B" pageNumber="Page 2 of 13" pageHeader="Job Knowledge/Functional and Technical Skills"/>
                    <form onSubmit={formik.handleSubmit}>
                    
                        <section id="inputs" className="flex flex-col gap-4">

                           
                        <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Has achieved required level of knowledge and skills in position- related areas
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.keeps_up_to_date && formik.errors.keeps_up_to_date ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="level_of_knowlegde"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.level_of_knowlegde}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Satisfactory</option>
                                    <option>Unsatisfactory</option>
                                </select>
                                {formik.touched.level_of_knowlegde && formik.errors.level_of_knowlegde ? (
                        <div className="text-red-600">{formik.errors.level_of_knowlegde}</div>
                      ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Applies knowledge and skills to meet job requirements
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.knowlegde_application && formik.errors.knowlegde_application ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="knowlegde_application"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.knowlegde_application}>
                                    <option selected disabled>Select option</option>
                                    <option>Successful</option>
                                    <option>Unsuccessful</option>
                                </select>
                                {formik.touched.knowlegde_application && formik.errors.knowlegde_application ? (
                        <div className="text-red-600">{formik.errors.knowlegde_application}</div>
                      ) : null}
                            </div> <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Keeps up to date in all relevant knowledge and skills areas to meet job requirements
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.keeps_up_to_date && formik.errors.keeps_up_to_date ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="keeps_up_to_date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.keeps_up_to_date}>
                                    <option selected disabled>Select option</option>
                                    <option>Above Expectations</option>
                                    <option>Below Expectations</option>
                                </select>
                                {formik.touched.keeps_up_to_date && formik.errors.keeps_up_to_date ? (
                        <div className="text-red-600">{formik.errors.keeps_up_to_date}</div>
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