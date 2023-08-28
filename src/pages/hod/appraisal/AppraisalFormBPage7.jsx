

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";

export default function AppraisalFormBPage7() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            folllows_work_procedures: "",
            high_quality_work: "",
            attentive_to_details:""
        },
        validationSchema: Yup.object({
            folllows_work_procedures: Yup.string().required("field cannot be empty"),
            high_quality_work: Yup.string().required("field cannot be empty"),
            attentive_to_details: Yup.string().required("field cannot be empty"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/appraisalPage8')

        }
    })
    return (
        <>
             <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading formName="Appraisal Form B" pageNumber="Page 7 of 13" pageHeader="Quality of Work" />
                    <form onSubmit={formik.handleSubmit}>

                        <section id="inputs" className="flex flex-col gap-4">


                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Accurately and carefully follows process/procedures for completing work
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.folllows_work_procedures&& formik.errors.folllows_work_procedures? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="folllows_work_procedures"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.folllows_work_procedures}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.folllows_work_procedures&& formik.errors.folllows_work_procedures? (
                                    <div className="text-red-600">{formik.errors.folllows_work_procedures}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Ensures a high-quality output of work (resulting in minimal acceptable/zero errors
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.high_quality_work && formik.errors.high_quality_work ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="high_quality_work"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.high_quality_work}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.high_quality_work && formik.errors.high_quality_work ? (
                                    <div className="text-red-600">{formik.errors.high_quality_work}</div>
                                ) : null}
                            </div> 
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Attentive to all details and aspects of a job or process to ensure a complete, high quality output
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.attentive_to_details && formik.errors.attentive_to_details ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="attentive_to_details"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.attentive_to_details}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.attentive_to_details && formik.errors.attentive_to_details ? (
                                    <div className="text-red-600">{formik.errors.attentive_to_details}</div>
                                ) : null}
                            </div>
                            




                        </section>
                        <section id="buttonSection" className="flex w-full gap-4 items-end justify-end">
                            <div className="w-1/2">
                                {/* <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" ><MdOutlineChevronLeft/> Back</Button> */}
                            </div>
                            <div className="w-1/2 ">
                                <Button buttonStyle="bg-primary-main text-white w-full">Save & Continue <MdOutlineChevronRight /></Button>

                            </div>

                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}