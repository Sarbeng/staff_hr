
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import {  MdOutlineChevronRight } from "react-icons/md";


export default function AppraisalFormBPage1() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            staff_no: "",
            employees_designation: "",
            employees_dept: "",
            supervisors_name:"",
            supervisors_rank: "",
            year_under_review: "",
            purpose_of_review:""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name field cannot be empty"),
            staff_no: Yup.string().required("Staff number field cannot be empty"),
            employees_designation: Yup.string().email().required(),
            employees_dept: Yup.number().required(""),
            supervisors_name: Yup.string().required("Supervisor's rank field cannot be empty"),
            supervisors_rank: Yup.string().required("Supervisors rank field cannot be empty"),
            year_under_review: Yup.string().required("Year Under Review field cannot be blank"),
            purpose_of_review: Yup.string().required("Purpose under review is required")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/hod_appraisalPage2')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <section id="heading" className="flex items-center justify-center mb-8">
                        <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                            <div className="flex gap-2 items-center">
                                <p className="text-primary-main capitalize">Appraisal Form B</p>
                                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 1 of 13</p>
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
                                    Employee's Designation/ Rank:
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.employees_designation && formik.errors.employees_designation ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="employees_designation"
                                        type="text"
                                        value={formik.values.employees_designation}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.employees_designation && formik.errors.employees_designation ? (
                                        <div className="text-red-600">{formik.errors.employees_designation}</div>
                                    ) : null}
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                    Employee's Department
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.employees_dept && formik.errors.employees_dept ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="employees_dept"
                                        type="text"
                                        value={formik.values.employees_dept}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}


                                    />
                                    {formik.touched.employees_dept && formik.errors.employees_dept ? (
                                        <div className="text-red-600">{formik.errors.employees_dept}</div>
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
                                    Supervisor's Designation/ Rank
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
                            </div>
                            <div className="flex gap-4 w-full">
                            
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
                                <div id="inputGroup" className="w-1/2">
                                <label className="capitalize" htmlFor="email">
                                    Purpose of Current Review
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.purpose_of_review && formik.errors.purpose_of_review ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="purpose_of_review"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.purpose_of_review}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.purpose_of_review && formik.errors.purpose_of_review ? (
                        <div className="text-red-600">{formik.errors.purpose_of_review}</div>
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