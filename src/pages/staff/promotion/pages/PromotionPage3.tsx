

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineInfo } from "react-icons/md";


export default function PromotionPage3() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/promotionPage2')
    }

    const formik = useFormik({
        initialValues: {
            previous_posts_before: "",
            previous_posts_in_uni: "",
            conferences: "",
        },
        validationSchema: Yup.object({
            previous_posts_before: Yup.string().required("Please add previous posts And Duties held before joining this university"),
            previous_posts_in_uni: Yup.string().required("Please add Posts And Duties held in this university"),
            conferences: Yup.string().required("Please add Particulars Of Conferences"),

        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/promotionPage4')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <section id="heading" className="flex items-center justify-center mb-8">
                        <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                            <div className="flex gap-2 items-center">
                                <p className="text-primary-main capitalize">Application for Procurement</p>
                                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 3 of 6</p>
                            </div>

                        </div>
                    </section>
                    <form onSubmit={formik.handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Previous Posts and Duties held, with Dates, before joining the University
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.previous_posts_before && formik.errors.previous_posts_before ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="previous_posts_before"

                                    value={formik.values.previous_posts_before}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                  {formik.touched.previous_posts_before && formik.errors.previous_posts_before ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.previous_posts_before}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Posts and Duties with Dates, held in this University
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.previous_posts_in_uni && formik.errors.previous_posts_in_uni ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="previous_posts_in_uni"

                                    value={formik.values.previous_posts_in_uni}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
  {formik.touched.previous_posts_in_uni && formik.errors.previous_posts_in_uni ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.previous_posts_in_uni}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Particulars of Conferences; Special Seminars, and Workshops in which you have participated. (Please list Papers you
read (if any)
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.conferences && formik.errors.conferences ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="conferences"

                                    value={formik.values.conferences}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                {formik.touched.conferences && formik.errors.conferences ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.conferences}</div>
                                ) : null}
                            </div>



                        </section>
                        <section id="buttonSection" className="flex w-full gap-4">
                        <div className="w-1/2">
                        <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" onClick={handleBack}><MdOutlineChevronLeft/> Back</Button>
                        </div>
                        <div className="w-1/2">
                        <Button buttonStyle="bg-primary-main text-white w-full">Save & Continue <MdOutlineChevronRight/></Button>
                           
                        </div>
                        
                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}