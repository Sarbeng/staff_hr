

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineInfo } from "react-icons/md";
import axios from "../../../../api/axios";
import { useAuthUser } from "react-auth-kit";

export default function AppraisalPage2() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/dashboard/appraisalPage2')
    }

    // get token
    const auth = useAuthUser();
    const token = auth().token;

    const onSumbit = async (values) => {
        
        const postUrl = "/appraisal_update"
        const response = await axios.post(postUrl,values,{
            headers: {
                "Accept" : "application/json",
                Authorization: `Bearer ${token}`
            }
        }).catch((error) => {
            console.log(error.response.data)
        })

        if (response) {
            alert(JSON.stringify(values, null, 2));
            console.log(response.data)
            navigate('/dashboard/appraisalSign')
        }
    }

    const formik = useFormik({
        initialValues: {
            strength_improvement: "",
            new_knowledge: "",
            other_information: "",
        },
        validationSchema: Yup.object({
            strength_improvement: Yup.string().required("Please add areas of strength and improvement"),
            new_knowledge: Yup.string().required("Please this is a required field"),
            other_information: Yup.string().required("This is a required field"),

        }),
        onSubmit: onSumbit
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
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 3 of 4</p>
                            </div>

                        </div>
                    </section>
                    
                    <form onSubmit={formik.handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Please list your area(s) of strength and area(s) of improvement:
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.strength_improvement && formik.errors.strength_improvement ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="strength_improvement"

                                    value={formik.values.strength_improvement}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                  {formik.touched.strength_improvement && formik.errors.strength_improvement ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.strength_improvement}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                What skills or new knowledge would you like to develop to improve your performance?: *
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.new_knowledge && formik.errors.new_knowledge ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="new_knowledge"

                                    value={formik.values.new_knowledge}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
  {formik.touched.new_knowledge && formik.errors.new_knowledge ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.new_knowledge}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Is there any other information you would like to share with your supervisor regarding your work performance?: *
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.other_information && formik.errors.other_information ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="other_information"

                                    value={formik.values.other_information}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                {formik.touched.other_information && formik.errors.other_information ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.other_information}</div>
                                ) : null}
                            </div>



                        </section>
                        <section id="buttonSection" className="flex w-full gap-4">
                        <div className="w-1/2">
                        <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" onClick={handleBack}><MdOutlineChevronLeft/> Back</Button>
                        </div>
                        <div className="w-1/2">
                        <Button buttonStyle="bg-primary-main text-white w-full">Next<MdOutlineChevronRight/></Button>
                           
                        </div>
                        
                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}