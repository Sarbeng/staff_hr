

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";

export default function AppraisalFormBPage5() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            takes_action: "",
            takes_advantage: "",
            takes_independent_action: "",
            volunteers: "",
            suggests_improvements: "",
        },
        validationSchema: Yup.object({
            takes_action: Yup.string().required("Name field cannot be empty"),
            takes_advantage: Yup.string().required("field cannot be empty"),
            takes_independent_action: Yup.string().required("This is a required field"),
            volunteers: Yup.string().required("This is a required field"),
            suggests_improvements: Yup.string().required("This field cannot be empty"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/appraisalPage6')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading formName="Appraisal Form B" pageNumber="Page 5 of 13" pageHeader="Initiating Action" />
                    <form onSubmit={formik.handleSubmit}>

                        <section id="inputs" className="flex flex-col gap-4">


                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                    Readily takes action consistent with department objectives
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.takes_action&& formik.errors.takes_action? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="takes_action"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.takes_action}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.takes_action&& formik.errors.takes_action? (
                                    <div className="text-red-600">{formik.errors.takes_action}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                    Looks for and takes advantage of opportunities to act beyond what is required
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.takes_advantage && formik.errors.takes_advantage ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="takes_advantage"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.takes_advantage}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.takes_advantage && formik.errors.takes_advantage ? (
                                    <div className="text-red-600">{formik.errors.takes_advantage}</div>
                                ) : null}
                            </div> <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                    Takes independent actions when appropriate Volunteers readily
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.takes_independent_action && formik.errors.takes_independent_action ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="takes_independent_action"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.takes_independent_action}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.takes_independent_action && formik.errors.takes_independent_action ? (
                                    <div className="text-red-600">{formik.errors.takes_independent_action}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Volunteers readily
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.volunteers && formik.errors.volunteers ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="volunteers"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.volunteers}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.volunteers && formik.errors.volunteers ? (
                                    <div className="text-red-600">{formik.errors.volunteers}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Suggests methods and procedures to improve departmental operation
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.suggests_improvements && formik.errors.suggests_improvements ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="suggests_improvements"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.suggests_improvements}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Satisfactory</option>
                                    <option>Unsatisfactory</option>
                                </select>
                                {formik.touched.suggests_improvements && formik.errors.suggests_improvements ? (
                                    <div className="text-red-600">{formik.errors.suggests_improvements}</div>
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