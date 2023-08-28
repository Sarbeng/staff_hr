

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineInfo } from "react-icons/md";


export default function PromotionPage4() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/promotionPage3')
    }

    const formik = useFormik({
        initialValues: {
            publication_for_previous_applications: "",
            publication_for_current_applications: "",
            professional_bodies: "",
        },
        validationSchema: Yup.object({
        publication_for_previous_applications: Yup.string().required("Please add Publications Submitted In Support Of Previous Application For Promotion"),
            publication_for_current_applications: Yup.string().required("Please add Publications Submitted In Support Of Current Application For Promotion"),
            professional_bodies: Yup.string().required("Please add Membership Of Professional/ Learned Bodies"),

        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/promotionPage5')

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
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 4 of 6</p>
                            </div>

                        </div>
                    </section>
                    <form onSubmit={formik.handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Publications submitted in support of Previous Application for Promotion. Give details of Books and Articles and state exact references
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.publication_for_previous_applications && formik.errors.publication_for_previous_applications ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="publication_for_previous_applications"

                                    value={formik.values.publication_for_previous_applications}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                  {formik.touched.publication_for_previous_applications && formik.errors.publication_for_previous_applications ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.publication_for_previous_applications}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Publications submitted in support of Current application for Promotion. Give details of Books and Articles and state exact references. Copies of Articles and other Publications (where possible) should accompany the Application
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.publication_for_current_applications && formik.errors.publication_for_current_applications ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="publication_for_current_applications"

                                    value={formik.values.publication_for_current_applications}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
  {formik.touched.publication_for_current_applications && formik.errors.publication_for_current_applications ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.publication_for_current_applications}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Membership of Professional/ Learned Bodies
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.professional_bodies && formik.errors.professional_bodies ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="professional_bodies"

                                    value={formik.values.professional_bodies}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                {formik.touched.professional_bodies && formik.errors.professional_bodies ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.professional_bodies}</div>
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