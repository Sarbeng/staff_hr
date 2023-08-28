

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";


export default function AppraisalFormBPage6() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            prioritizes_multiple_activities: "",
            determines_tasks: "",
            uses_time_effectively: "",
            meets_deadlines:""
        },
        validationSchema: Yup.object({
            prioritizes_multiple_activities: Yup.string().required("field cannot be empty"),
            determines_tasks: Yup.string().required("field cannot be empty"),
            uses_time_effectively: Yup.string().required("field cannot be empty"),
            meets_deadlines: Yup.string().required("field cannot be empty"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/hod_appraisalPage7')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading formName="Appraisal Form B" pageNumber="Page 6 of 13" pageHeader="Organizing and Planning" />
                    <form onSubmit={formik.handleSubmit}>

                        <section id="inputs" className="flex flex-col gap-4">


                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Prioritizes multiple activities and assignments effectively and adjusts as appropriate
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.prioritizes_multiple_activities&& formik.errors.prioritizes_multiple_activities? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="prioritizes_multiple_activities"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.prioritizes_multiple_activities}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.prioritizes_multiple_activities&& formik.errors.prioritizes_multiple_activities? (
                                    <div className="text-red-600">{formik.errors.prioritizes_multiple_activities}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Determines tasks and secures appropriate resources to get things done
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.determines_tasks && formik.errors.determines_tasks ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="determines_tasks"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.determines_tasks}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.determines_tasks && formik.errors.determines_tasks ? (
                                    <div className="text-red-600">{formik.errors.determines_tasks}</div>
                                ) : null}
                            </div> <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Uses time effectively and stays focused to ensure work is completed
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.uses_time_effectively && formik.errors.uses_time_effectively ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="uses_time_effectively"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.uses_time_effectively}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.uses_time_effectively && formik.errors.uses_time_effectively ? (
                                    <div className="text-red-600">{formik.errors.uses_time_effectively}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Meets commitments and deadlines consistently
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.meets_deadlines && formik.errors.meets_deadlines ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="meets_deadlines"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.meets_deadlines}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.meets_deadlines && formik.errors.meets_deadlines ? (
                                    <div className="text-red-600">{formik.errors.meets_deadlines}</div>
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