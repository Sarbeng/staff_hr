

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";


export default function AppraisalFormBPage3() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            seeks_information: "",
            shares_information: "",
            responds_quickly: "",
            seeks_opportunities: "",
        },
        validationSchema: Yup.object({
            seeks_information: Yup.string().required("This field cannot be empty"),
            shares_information: Yup.string().required("This field cannot be empty"),
            responds_quickly: Yup.string().required("This field cannot be empty"),
            seeks_opportunities: Yup.string().required("This field cannot be empty"),
            
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/hod_appraisalPage4')

        }
    })
    return (
        <>
             <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading formName="Appraisal Form B" pageNumber="Page 3 of 13" pageHeader="Service Orientation"/>
                    <form onSubmit={formik.handleSubmit}>
                    
                        <section id="inputs" className="flex flex-col gap-4">

                           
                        <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Actively seeks information to understand customers’ circumstances, problems, needs, and expectations
                                </label>
                                <select className={`capitalize mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.seeks_information && formik.errors.seeks_information? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="seeks_information"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.seeks_information}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Unsatisfactory</option>
                                    <option>satisfactory</option>
                                </select>
                                {formik.touched.seeks_information && formik.errors.seeks_information ? (
                        <div className="text-red-600">{formik.errors.seeks_information}</div>
                      ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Shares information with customers to build their understanding of issues and capabilities
                                </label>
                                <select className={`capitalize mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.shares_information && formik.errors.shares_information ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="shares_information"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.shares_information}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.shares_information && formik.errors.shares_information ? (
                        <div className="text-red-600">{formik.errors.shares_information}</div>
                      ) : null}
                            </div> <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Responds quickly to meet customer needs and resolve problems
                                </label>
                                <select className={`capitalize mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.responds_quickly && formik.errors.responds_quickly ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="responds_quickly"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.responds_quickly}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Successful</option>
                                    <option>unsuccessful</option>
                                </select>
                                {formik.touched.responds_quickly && formik.errors.responds_quickly ? (
                        <div className="text-red-600">{formik.errors.responds_quickly}</div>
                      ) : null}
                            </div>
                              <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Seeks opportunities to improve the products and/or services to meet customer needs
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.seeks_opportunities && formik.errors.seeks_opportunities ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="seeks_opportunities"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.seeks_opportunities}>
                                    <option disabled selected >Select Rank</option>
                                    <option>Above Expectations</option>
                                    <option >Below Expectations</option>
                                </select>
                                {formik.touched.seeks_opportunities && formik.errors.seeks_opportunities ? (
                        <div className="text-red-600">{formik.errors.seeks_opportunities}</div>
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