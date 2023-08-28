

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import {  MdOutlineChevronRight } from "react-icons/md";


export default function AppraisalPage1() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            staff_no: "",
            email: "",
            phone: "",
            apointment_date:"",
            job_title:"",
            supervisors_name:"",
            supervisors_staff_no:"",
            supervisors_rank: "",
            year_under_review: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name field cannot be empty"),
            staff_no: Yup.string().required("Staff number field cannot be empty"),
            email: Yup.string().email().required(),
            phone: Yup.number().required(""),
            apointment_date: Yup.date().required("Date field cannot be empty"),
            job_title: Yup.string().required("Job title field cannot be empty"),
            supervisors_name: Yup.string().required("Supervisor's rank field cannot be empty"),
            supervisors_staff_no: Yup.string().required("Supervisors staff number field cannot be empty"),
            supervisors_rank: Yup.string().required("Supervisors rank field cannot be empty"),
            year_under_review: Yup.string().required("Year Under Review field cannot be blank")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/appraisalPage2')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <section id="heading" className="flex items-center justify-center mb-8">
                        <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                            <div className="flex gap-2 items-center">
                                <p className="text-primary-main capitalize">Appraisal Form A</p>
                                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 1 of 3</p>
                            </div>

                        </div>
                    </section>
                    <form onSubmit={formik.handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">

                           
                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                    Name of Employee
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.name && formik.errors.name ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="name"
                                        type="text"
                                        value={formik.values.name}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="text-red-600">{formik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                    Staff No.
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.staff_no && formik.errors.staff_no ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="staff_no"
                                        type="text"
                                        value={formik.values.staff_no}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}


                                    />
                                    {formik.touched.staff_no && formik.errors.staff_no ? (
                                        <div className="text-red-600">{formik.errors.staff_no}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.email && formik.errors.email ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="email"
                                        type="email"
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-600">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Phone no.
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.phone && formik.errors.phone ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="phone"
                                        type="text"
                                        value={formik.values.phone}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}


                                    />
                                    {formik.touched.phone && formik.errors.phone ? (
                                        <div className="text-red-600">{formik.errors.phone}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        E-mail Address
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.apointment_date && formik.errors.apointment_date ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="apointment_date"
                                        type="date"
                                        value={formik.values.apointment_date}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.apointment_date && formik.errors.apointment_date ? (
                                        <div className="text-red-600">{formik.errors.apointment_date}</div>
                                    ) : null}
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Job Title
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.job_title && formik.errors.job_title ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="job_title"
                                        type="text"
                                        value={formik.values.job_title}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}


                                    />
                                    {formik.touched.job_title && formik.errors.job_title ? (
                                        <div className="text-red-600">{formik.errors.job_title}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                    Supervisors name
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.supervisors_name && formik.errors.supervisors_name ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="supervisors_name"
                                        type="text"
                                        value={formik.values.supervisors_name}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.supervisors_name && formik.errors.supervisors_name ? (
                                        <div className="text-red-600">{formik.errors.supervisors_name}</div>
                                    ) : null}
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Supervisor's Staff no
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.supervisors_staff_no && formik.errors.supervisors_staff_no ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="supervisors_staff_no"
                                        type="text"
                                        value={formik.values.supervisors_staff_no}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.supervisors_staff_no && formik.errors.supervisors_staff_no ? (
                                        <div className="text-red-600">{formik.errors.supervisors_staff_no}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                    Supervisors Rank
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.supervisors_rank && formik.errors.supervisors_rank ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="supervisors_rank"
                                        type="text"
                                        value={formik.values.supervisors_rank}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.supervisors_rank && formik.errors.supervisors_rank ? (
                                        <div className="text-red-600">{formik.errors.supervisors_rank}</div>
                                    ) : null}
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                    Year under Review
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.year_under_review && formik.errors.year_under_review ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="year_under_review"
                                        type="text"
                                        value={formik.values.year_under_review}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}


                                    />
                                    {formik.touched.year_under_review && formik.errors.year_under_review ? (
                                        <div className="text-red-600">{formik.errors.year_under_review}</div>
                                    ) : null}
                                </div>
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